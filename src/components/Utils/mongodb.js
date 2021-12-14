import { TimeFiltersData } from 'assets/Database/DatabaseUtils';
import { MongoClient } from 'mongodb'
import { RemoveNotAllowedChars } from './Utils';
const { MONGODB_URI, MONGODB_DB } = process.env

//---------------------------------------------------------------------------------------
//--------------------------------CATEGORIES Queries---------------------------------------------
export const GetAllCatagoriesFromMongo = async (sortBy) => {
  const { db } = await connectToDatabase();

  //Bake Query for all categories
  const categoriesQuery = {}

  //Bake what to return in each object from DB
  const whatToReturn = {
    _id: 0,
  }

  let categoiresList = null;

  if (sortBy) {
    categoiresList = await db.collection('categories').find(categoriesQuery).sort(sortBy).project(whatToReturn).toArray();
  } else {
    categoiresList = await db.collection('categories').find(categoriesQuery).project(whatToReturn).toArray();
  }
  return JSON.parse(JSON.stringify(categoiresList));
}

//----------------------------------------------------------------------------------
//--------------------------------TOOLS Queries---------------------------------------------
export const GetAllToolsFromMongo = async () => {
  const { db } = await connectToDatabase();

  const filterAndWhatToReturnQuery = GetAllToolsAndWhatToReturnQuery();

  let toolsList = await db.collection('tools2')
    .find(filterAndWhatToReturnQuery.query)
    .sort(SortOptions.category)
    .project(filterAndWhatToReturnQuery.whatToReturn).toArray();

  return JSON.parse(JSON.stringify(toolsList));
}

export const GetToolsByCategoryFromMongo = async (query) => {
  const { db } = await connectToDatabase();

  const filterAndWhatToReturnQuery = GetAllToolsInCategoryAndWhatToReturnQuery(query);

  let toolsList = await db.collection('tools2')
    .find(filterAndWhatToReturnQuery.query)
    .sort(SortOptions.price)
    .project(filterAndWhatToReturnQuery.whatToReturn).toArray();
  return JSON.parse(JSON.stringify(toolsList));
}

export const GetToolsByPriceListFromMongo = async (context) => {
  const { db } = await connectToDatabase();

  const allToolsAndWhatToReturnQuery = GetFilterAndWhatToReturnQuery(context);

  let toolsList = await db.collection('tools2')
    .find(allToolsAndWhatToReturnQuery.query)
    .sort(GetTimeFilterSortingByQuery(context))
    .project(allToolsAndWhatToReturnQuery.whatToReturn).toArray();
  return JSON.parse(JSON.stringify(toolsList));
}


//---------------------------------------------------------------------------------------
//--------------------------------Electric Table Queries---------------------------------------------
export const GetElectricTableFromMongo = async (sortBy) => {
  const { db } = await connectToDatabase();

  //Bake Query for electric table data
  const electricTableQuery = {}

  //Bake what to return in each object from DB
  const whatToReturn = {
    _id: 0,
  }

  let electricTableData = await db.collection('electricTable').find(electricTableQuery).project(whatToReturn).toArray();

  return JSON.parse(JSON.stringify(electricTableData));
}

//--------------------------------sort optoins---------------------------------------------
export const SortOptions = {
  popularity: { "popularity": 1 },
  price: { "UpTo24Hours": 1 },
  category: { "category.0": 1 }
}

function GetTimeFilterSortingByQuery(context) {
  switch (context.params.timeFilterID) {
    case TimeFiltersData.UpTo24Hours.filterId:
      return { "UpTo24Hours": 1 }
    case TimeFiltersData.UpTo3Days.filterId:
      return { "UpTo3Days": 1 }
    case TimeFiltersData.MoreThan3Days.filterId:
      return { "MoreThan3Days": 1 }
  }
}



//--------------------------------filter optoins---------------------------------------------
function GetFilterAndWhatToReturnQuery(context) {
  let category = RemoveNotAllowedChars(context.params.categoryID);

  switch (category) {
    case "hammers":
      return hammersFilterAndWhatToReturnQuery(context);
      break;
    case "diamond-drills":
      return diamondDrillsFilterAndWhatToReturnQuery(context);
      break;
    default:
      return generalFilterAndWhatToReturnQuery(context);
      break;
  }
}

function GetAllToolsAndWhatToReturnQuery() {
  let whatToReturnAndQuery = {};

  //Bake Query with hammers and KG range value
  whatToReturnAndQuery.query = {};

  //Bake what to return in each object from DB
  whatToReturnAndQuery.whatToReturn = {
    _id: 0,
  };

  return whatToReturnAndQuery;
}

function GetAllToolsInCategoryAndWhatToReturnQuery(query) {
  let whatToReturnAndQuery = {};

  //Bake Query with hammers and KG range value
  whatToReturnAndQuery.query = {
    category: RemoveNotAllowedChars(query["categoryID"])
  };

  //Bake what to return in each object from DB
  whatToReturnAndQuery.whatToReturn = {
    _id: 0,
    "id": 1,
    "nameWithoutRentalText": 1,
    "fullModel": 1,
    "urlPostFix": 1,
    "images": { $slice: 1 }
  };

  return whatToReturnAndQuery;
}



//-------------------------------hammers----------------------------------------
function hammersFilterAndWhatToReturnQuery(context) {
  let whatToReturnAndQuery = {};

  if (RemoveNotAllowedChars(context.params.filterID).includes("KG")) {
    // Bake KG Range
    let kgDigitsOnly = parseFloat(context.params.filterID.replace('KG', ''));
    let kgStartRange = kgDigitsOnly - 3;
    let kgEndRange = kgDigitsOnly + 3;

    if (kgDigitsOnly == 20) {
      kgStartRange = kgDigitsOnly - 5;
      kgEndRange = kgDigitsOnly + 5;
    }

    //Bake Query with hammers and KG range value
    whatToReturnAndQuery.query = {
      category: context.params.categoryID,
      $and: [
        { kg: { $lte: kgEndRange } },
        { kg: { $gte: kgStartRange } }
      ]
    };

    //Bake what to return in each object from DB
    whatToReturnAndQuery.whatToReturn = {
      _id: 0,
      "id": 1,
      "urlPostFix": 1,
      "nameWithoutRentalText": 1,
      "UpTo24Hours": 1,
      "UpTo3Days": 1,
      "MoreThan3Days": 1,
      "kg": 1,
      "images": { $slice: 1 }
    }
  }
  return whatToReturnAndQuery;
}

//-------------------------------diamond drills----------------------------------------
function diamondDrillsFilterAndWhatToReturnQuery(context) {
  let whatToReturnAndQuery = {};

  if (RemoveNotAllowedChars(context.params.filterID).includes("diameter")) {

    // Bake diameter Range, start with default value
    let minDrillCapQuery = '0';
    let maxDrillCapQuery = '12';
    switch (context.params.filterID) {
      case 'diameterMax3':
        minDrillCapQuery = '0';
        maxDrillCapQuery = '4';
        break;
      case 'diameter3To6':
        minDrillCapQuery = '3';
        maxDrillCapQuery = '6';
        break;
      case 'diameter6To12':
        minDrillCapQuery = '6';
        maxDrillCapQuery = '12';
        break;
    }


    //Bake Query with diamond drills and diameter range value
    whatToReturnAndQuery.query = {
      category: context.params.categoryID,
      $or: [
        { minDrillCap: { $gte: minDrillCapQuery } },
        { maxDrillCap: { $lte: maxDrillCapQuery } }
      ]
    };

    //Bake what to return in each object from DB
    whatToReturnAndQuery.whatToReturn = {
      _id: 0,
      "id": 1,
      "urlPostFix": 1,
      "nameWithoutRentalText": 1,
      "UpTo24Hours": 1,
      "UpTo3Days": 1,
      "MoreThan3Days": 1,
      "images": { $slice: 1 }
    }
  }
  return whatToReturnAndQuery;
}


//-------------------------------Any category general query----------------------------------------
function generalFilterAndWhatToReturnQuery(context) {
  let whatToReturnAndQuery = {};

  //Bake Query with category id
  whatToReturnAndQuery.query = {
    category: context.params.categoryID
  };

  //Bake what to return in each object from DB
  whatToReturnAndQuery.whatToReturn = {
    _id: 0,
    "id": 1,
    "urlPostFix": 1,
    "nameWithoutRentalText": 1,
    "UpTo24Hours": 1,
    "UpTo3Days": 1,
    "MoreThan3Days": 1,
    "images": { $slice: 1 }
  }
  return whatToReturnAndQuery;
}


//----------------------------------------------------------------------------------------------
//--------------------------------------Basic Mongo Stuff---------------------------------------

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintfain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo

if (!cached) {
  cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
      return {
        client,
        db: client.db(MONGODB_DB),
      }
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}