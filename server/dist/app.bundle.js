/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/server.ts");

_server__WEBPACK_IMPORTED_MODULE_0__["default"].listen();
/* harmony default export */ __webpack_exports__["default"] = (_server__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/modules/constants.ts":
/*!**********************************!*\
  !*** ./src/modules/constants.ts ***!
  \**********************************/
/*! exports provided: NBA_TEAM_COUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NBA_TEAM_COUNT", function() { return NBA_TEAM_COUNT; });
const NBA_TEAM_COUNT = 30;

/***/ }),

/***/ "./src/modules/index.ts":
/*!******************************!*\
  !*** ./src/modules/index.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./src/modules/schema.ts");

/* harmony default export */ __webpack_exports__["default"] = (_schema__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/modules/resolvers/game/highlights/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/resolvers/game/highlights/index.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _retrieve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieve */ "./src/modules/resolvers/game/highlights/retrieve.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
  retrieve: _retrieve__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/modules/resolvers/game/highlights/retrieve.ts":
/*!***********************************************************!*\
  !*** ./src/modules/resolvers/game/highlights/retrieve.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../server */ "./src/server.ts");


const highlightSearchQuery = (game, db) => {
  const {
    home,
    away,
    date
  } = game;
  const teamNameQuery = db.prepare("SELECT name FROM teams WHERE id = ?").pluck();
  const homeName = teamNameQuery.get(home);
  const awayName = teamNameQuery.get(away);
  const gameDate = new Date(date).toDateString().slice(4);
  return `${awayName} vs ${homeName} Full Highlights ${gameDate}`;
};

const resolver = game => {
  const db = _server__WEBPACK_IMPORTED_MODULE_0__["default"].getDb();
  return highlightSearchQuery(game, db);
};

/* harmony default export */ __webpack_exports__["default"] = (resolver);

/***/ }),

/***/ "./src/modules/resolvers/game/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/resolvers/game/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _highlights__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlights */ "./src/modules/resolvers/game/highlights/index.ts");
/* harmony import */ var _retrieve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retrieve */ "./src/modules/resolvers/game/retrieve.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ "./src/modules/resolvers/game/search.ts");



/* harmony default export */ __webpack_exports__["default"] = ({
  highlights: _highlights__WEBPACK_IMPORTED_MODULE_0__["default"],
  retrieve: _retrieve__WEBPACK_IMPORTED_MODULE_1__["default"],
  search: _search__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/modules/resolvers/game/retrieve.ts":
/*!************************************************!*\
  !*** ./src/modules/resolvers/game/retrieve.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server */ "./src/server.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const resolver = (obj, {
  id
}) => {
  const db = _server__WEBPACK_IMPORTED_MODULE_1__["default"].getDb();
  const query = "SELECT * FROM games WHERE id = ?";
  const stmt = db.prepare(query);
  let game = stmt.get(id);

  if (!game) {
    throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["ApolloError"](`Requested entity not found for given args id: '${id}'`);
  }

  return _objectSpread({
    homeScore: game.home_score,
    awayScore: game.away_score,
    winner: game.winner
  }, game);
};

/* harmony default export */ __webpack_exports__["default"] = (resolver);

/***/ }),

/***/ "./src/modules/resolvers/game/search.ts":
/*!**********************************************!*\
  !*** ./src/modules/resolvers/game/search.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server */ "./src/server.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const resolver = (obj, {
  teamId
}) => {
  const db = _server__WEBPACK_IMPORTED_MODULE_0__["default"].getDb();
  const stmt = db.prepare("SELECT * FROM games WHERE home = ? OR away = ?");
  const games = stmt.all(teamId, teamId);
  return games.map(game => _objectSpread({
    homeScore: game.home_score,
    awayScore: game.away_score,
    winner: game.winner
  }, game));
};

/* harmony default export */ __webpack_exports__["default"] = (resolver);

/***/ }),

/***/ "./src/modules/resolvers/team/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/resolvers/team/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _retrieve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieve */ "./src/modules/resolvers/team/retrieve.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./src/modules/resolvers/team/search.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
  retrieve: _retrieve__WEBPACK_IMPORTED_MODULE_0__["default"],
  search: _search__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/modules/resolvers/team/retrieve.ts":
/*!************************************************!*\
  !*** ./src/modules/resolvers/team/retrieve.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../server */ "./src/server.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/modules/util.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const getGames = async id => {
  const currYear = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getCurrSeasonYear"])();
  const url = `https://www.balldontlie.io/api/v1/games?seasons[]=${currYear}&team_ids[]=${id}&per_page=110`;
  const response = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(url);
  const data = await response.json();
  return data.data.filter(game => game.status === "Final");
};

const getWinLoss = (teamId, games) => {
  return games.reduce((record, game) => {
    if (game.winner === teamId) {
      record.wins++;
    } else {
      record.losses++;
    }

    return record;
  }, {
    wins: 0,
    losses: 0
  });
};

const storeGames = (games, db) => {
  const query = `INSERT OR IGNORE INTO games
    (id, date, home, away, season, home_score, away_score, winner)
    VALUES (@id, @date, @home, @away, @season, @homeScore, @awayScore, @winner)`;
  const insert = db.prepare(query);
  const insertMany = db.transaction(games => {
    for (const game of games) insert.run(game);
  });
  insertMany(games);
};

const storeRecord = (teamId, teamRecord, db) => {
  const query = `UPDATE teams
    SET wins = @wins, losses = @losses, updated_at = @updatedAt WHERE id = @id`;
  const update = db.prepare(query);
  update.run(_objectSpread({
    id: teamId,
    updatedAt: Object(_util__WEBPACK_IMPORTED_MODULE_3__["convDateString"])(new Date().toISOString())
  }, teamRecord));
};

const resolver = async (obj, {
  id,
  name,
  abbrev
}) => {
  const db = _server__WEBPACK_IMPORTED_MODULE_2__["default"].getDb();
  const query = "SELECT * FROM teams WHERE id = ? OR name = ? OR abbrev = ?";
  const stmt = db.prepare(query);
  let team = stmt.get(id, name, abbrev);

  if (!team) {
    throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["ApolloError"](`Requested entity not found for given args id: '${id}', name: '${name}', abbrev: '${name}' `);
  }

  const lastUpdated = team.updated_at;

  if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isToday"])(lastUpdated)) {
    // Retrieve any games we missed since last update
    let games = await getGames(team.id);
    games = games.map(game => ({
      id: game.id,
      date: Object(_util__WEBPACK_IMPORTED_MODULE_3__["convDateString"])(game.date),
      home: game.home_team.id,
      away: game.visitor_team.id,
      season: game.season,
      homeScore: game.home_team_score,
      awayScore: game.visitor_team_score,
      winner: game.home_team_score > game.visitor_team_score ? game.home_team.id : game.visitor_team.id
    }));
    storeGames(games, db);
    const teamRecord = getWinLoss(team.id, games);
    storeRecord(team.id, teamRecord, db);
    team.wins = teamRecord.wins;
    team.losses = teamRecord.losses;
  }

  ;
  return _objectSpread({
    fullName: team.full_name
  }, team);
};

/* harmony default export */ __webpack_exports__["default"] = (resolver);

/***/ }),

/***/ "./src/modules/resolvers/team/search.ts":
/*!**********************************************!*\
  !*** ./src/modules/resolvers/team/search.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server */ "./src/server.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/modules/constants.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const getTeams = async () => {
  const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()("https://www.balldontlie.io/api/v1/teams");
  const data = await response.json();
  return data.data;
};

const prepopulate = async db => {
  const teamData = await getTeams();
  const teams = teamData.map(team => _objectSpread({
    fullName: team.full_name,
    abbrev: team.abbreviation
  }, team));
  const insert = db.prepare(`INSERT OR REPLACE INTO teams
    (id, name, full_name, abbrev, conference, division)
    VALUES (@id, @name, @fullName, @abbrev, @conference, @division)`);
  const insertMany = db.transaction(teams => {
    for (const team of teams) insert.run(team);
  });
  insertMany(teams);
};

const teamsInitialized = db => {
  const stmt = db.prepare("SELECT COUNT(*) AS teamCount FROM teams");
  const teamCount = stmt.get().teamCount;
  return teamCount === _constants__WEBPACK_IMPORTED_MODULE_2__["NBA_TEAM_COUNT"];
};

const resolver = () => {
  const db = _server__WEBPACK_IMPORTED_MODULE_1__["default"].getDb(); // Should only be needed for new instances if the application.

  if (!teamsInitialized(db)) {
    prepopulate(db);
  }

  const stmt = db.prepare("SELECT * FROM teams");
  return stmt.all().map(team => _objectSpread({
    fullName: team.full_name
  }, team));
};

/* harmony default export */ __webpack_exports__["default"] = (resolver);

/***/ }),

/***/ "./src/modules/resolvers/user/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/resolvers/user/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _retrieve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieve */ "./src/modules/resolvers/user/retrieve.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
  retrieve: _retrieve__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/modules/resolvers/user/retrieve.ts":
/*!************************************************!*\
  !*** ./src/modules/resolvers/user/retrieve.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const resolver = (obj, args, context, info) => {
  return {
    id: "",
    name: "",
    email: "",
    teams: []
  };
};

/* harmony default export */ __webpack_exports__["default"] = (resolver);

/***/ }),

/***/ "./src/modules/schema.ts":
/*!*******************************!*\
  !*** ./src/modules/schema.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/modules/types/index.ts");



const queries = apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  type Query {
    _empty: String
  }
`;
const resolvers = {};
/* harmony default export */ __webpack_exports__["default"] = ({
  typeDefs: [queries, _types__WEBPACK_IMPORTED_MODULE_2__["Game"].typeDef, _types__WEBPACK_IMPORTED_MODULE_2__["Team"].typeDef, _types__WEBPACK_IMPORTED_MODULE_2__["User"].typeDef],
  resolvers: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"])(resolvers, _types__WEBPACK_IMPORTED_MODULE_2__["Game"].resolvers, _types__WEBPACK_IMPORTED_MODULE_2__["Team"].resolvers, _types__WEBPACK_IMPORTED_MODULE_2__["User"].resolvers)
});

/***/ }),

/***/ "./src/modules/types/game/game.ts":
/*!****************************************!*\
  !*** ./src/modules/types/game/game.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resolvers_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resolvers/game */ "./src/modules/resolvers/game/index.ts");
/* harmony import */ var _resolvers_team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resolvers/team */ "./src/modules/resolvers/team/index.ts");



const typeDef = apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  type Game {
    id: ID!
    date: String!
    home: Team!
    away: Team!
    season: Int!
    homeScore: Int!
    awayScore: Int!
    winner: Team!
    highlights: String!
  }

  type GameList {
    items: [Game]!
  }

  extend type Query {
    game(id: ID = ""): Game
  }
`;
const resolvers = {
  Query: {
    game: _resolvers_game__WEBPACK_IMPORTED_MODULE_1__["default"].retrieve
  },
  Game: {
    home: game => _resolvers_team__WEBPACK_IMPORTED_MODULE_2__["default"].retrieve(game, {
      id: game.home,
      name: "",
      abbrev: ""
    }),
    away: game => _resolvers_team__WEBPACK_IMPORTED_MODULE_2__["default"].retrieve(game, {
      id: game.away,
      name: "",
      abbrev: ""
    }),
    winner: game => _resolvers_team__WEBPACK_IMPORTED_MODULE_2__["default"].retrieve(game, {
      id: game.winner,
      name: "",
      abbrev: ""
    }),
    highlights: game => _resolvers_game__WEBPACK_IMPORTED_MODULE_1__["default"].highlights.retrieve(game)
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  typeDef,
  resolvers
});

/***/ }),

/***/ "./src/modules/types/game/index.ts":
/*!*****************************************!*\
  !*** ./src/modules/types/game/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules/types/game/game.ts");

/* harmony default export */ __webpack_exports__["default"] = (_game__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/modules/types/index.ts":
/*!************************************!*\
  !*** ./src/modules/types/index.ts ***!
  \************************************/
/*! exports provided: Game, Team, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules/types/game/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return _game__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team */ "./src/modules/types/team/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return _team__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/modules/types/user/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/modules/types/team/index.ts":
/*!*****************************************!*\
  !*** ./src/modules/types/team/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team */ "./src/modules/types/team/team.ts");

/* harmony default export */ __webpack_exports__["default"] = (_team__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/modules/types/team/team.ts":
/*!****************************************!*\
  !*** ./src/modules/types/team/team.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resolvers_team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resolvers/team */ "./src/modules/resolvers/team/index.ts");
/* harmony import */ var _resolvers_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resolvers/game */ "./src/modules/resolvers/game/index.ts");



const typeDef = apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  type Team {
    id: ID!
    name: String!
    fullName: String!
    abbrev: String!
    conference: String!
    division: String!
    wins: Int!
    losses: Int!
    games: [Game]!
  }

  extend type Query {
    team(id: ID = "", name: String = "", abbrev: String = ""): Team
    teams: [Team]
  }
`;
const resolvers = {
  Query: {
    team: _resolvers_team__WEBPACK_IMPORTED_MODULE_1__["default"].retrieve,
    teams: _resolvers_team__WEBPACK_IMPORTED_MODULE_1__["default"].search
  },
  Team: {
    games: parent => _resolvers_game__WEBPACK_IMPORTED_MODULE_2__["default"].search(null, {
      teamId: parent.id
    })
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  typeDef,
  resolvers
});

/***/ }),

/***/ "./src/modules/types/user/index.ts":
/*!*****************************************!*\
  !*** ./src/modules/types/user/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/modules/types/user/user.ts");

/* harmony default export */ __webpack_exports__["default"] = (_user__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/modules/types/user/user.ts":
/*!****************************************!*\
  !*** ./src/modules/types/user/user.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resolvers_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resolvers/user */ "./src/modules/resolvers/user/index.ts");


const typeDef = apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  type User {
    id: ID!
    name: String!
    email: String!
    teams: [Team]
  }

  extend type Query {
    user(id: ID!): User
  }
`;
const resolvers = {
  Query: {
    user: _resolvers_user__WEBPACK_IMPORTED_MODULE_1__["default"].retrieve
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  typeDef,
  resolvers
});

/***/ }),

/***/ "./src/modules/util.ts":
/*!*****************************!*\
  !*** ./src/modules/util.ts ***!
  \*****************************/
/*! exports provided: getCurrSeasonYear, isToday, convDateString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrSeasonYear", function() { return getCurrSeasonYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convDateString", function() { return convDateString; });
const getCurrSeasonYear = () => {
  const today = new Date();
  const seasonStart = new Date(today.getFullYear(), 9); // If the current month is before  october, then use the prior year

  if (today < seasonStart) {
    return today.getFullYear() - 1;
  }

  return today.getFullYear();
};
const isToday = date => {
  const lastUpdateDate = new Date(date).getTime();
  const today = new Date().getTime();
  const ONE_DAY = 60 * 60 * 24 * 1000;
  return today - lastUpdateDate < ONE_DAY;
};
const convDateString = date => {
  return date.replace(/[TZ]/g, " ").slice(0, -5);
};

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! better-sqlite3 */ "better-sqlite3");
/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules */ "./src/modules/index.ts");






const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_3__["ApolloServer"]({
  typeDefs: _modules__WEBPACK_IMPORTED_MODULE_5__["default"].typeDefs,
  resolvers: _modules__WEBPACK_IMPORTED_MODULE_5__["default"].resolvers
});
const dbPath = path__WEBPACK_IMPORTED_MODULE_4___default.a.join(__dirname, "../db", "hoop-watcher.db");
const db = new better_sqlite3__WEBPACK_IMPORTED_MODULE_2___default.a(dbPath);
const app = express__WEBPACK_IMPORTED_MODULE_0___default()();

function setPort(port = 4000) {
  app.set('port', port);
}

server.applyMiddleware({
  app
});

function listen() {
  app.listen({
    port: 4000
  }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
}

app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()({
  origin: '*',
  // Be sure to switch to your production domain
  optionsSuccessStatus: 200
}));
app.get('/api/status', (req, res) => {
  res.send({
    status: 'ok'
  });
});
/* harmony default export */ __webpack_exports__["default"] = ({
  getApp: () => app,
  getServer: () => server,
  getDb: () => db,
  setPort,
  listen
});

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wes-tan/Documents/hoop-watcher/server/src/app.ts */"./src/app.ts");


/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "better-sqlite3":
/*!*********************************!*\
  !*** external "better-sqlite3" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("better-sqlite3");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcmVzb2x2ZXJzL2dhbWUvaGlnaGxpZ2h0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yZXNvbHZlcnMvZ2FtZS9oaWdobGlnaHRzL3JldHJpZXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Jlc29sdmVycy9nYW1lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Jlc29sdmVycy9nYW1lL3JldHJpZXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Jlc29sdmVycy9nYW1lL3NlYXJjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yZXNvbHZlcnMvdGVhbS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yZXNvbHZlcnMvdGVhbS9yZXRyaWV2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yZXNvbHZlcnMvdGVhbS9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcmVzb2x2ZXJzL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcmVzb2x2ZXJzL3VzZXIvcmV0cmlldmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc2NoZW1hLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3R5cGVzL2dhbWUvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy90eXBlcy9nYW1lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3R5cGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3R5cGVzL3RlYW0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdHlwZXMvdGVhbS90ZWFtLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3R5cGVzL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdHlwZXMvdXNlci91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiZXR0ZXItc3FsaXRlM1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiJdLCJuYW1lcyI6WyJzZXJ2ZXIiLCJsaXN0ZW4iLCJOQkFfVEVBTV9DT1VOVCIsInNjaGVtYSIsInJldHJpZXZlIiwiaGlnaGxpZ2h0U2VhcmNoUXVlcnkiLCJnYW1lIiwiZGIiLCJob21lIiwiYXdheSIsImRhdGUiLCJ0ZWFtTmFtZVF1ZXJ5IiwicHJlcGFyZSIsInBsdWNrIiwiaG9tZU5hbWUiLCJnZXQiLCJhd2F5TmFtZSIsImdhbWVEYXRlIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsInNsaWNlIiwicmVzb2x2ZXIiLCJnZXREYiIsImhpZ2hsaWdodHMiLCJzZWFyY2giLCJvYmoiLCJpZCIsInF1ZXJ5Iiwic3RtdCIsIkFwb2xsb0Vycm9yIiwiaG9tZVNjb3JlIiwiaG9tZV9zY29yZSIsImF3YXlTY29yZSIsImF3YXlfc2NvcmUiLCJ3aW5uZXIiLCJ0ZWFtSWQiLCJnYW1lcyIsImFsbCIsIm1hcCIsImdldEdhbWVzIiwiY3VyclllYXIiLCJnZXRDdXJyU2Vhc29uWWVhciIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImZpbHRlciIsInN0YXR1cyIsImdldFdpbkxvc3MiLCJyZWR1Y2UiLCJyZWNvcmQiLCJ3aW5zIiwibG9zc2VzIiwic3RvcmVHYW1lcyIsImluc2VydCIsImluc2VydE1hbnkiLCJ0cmFuc2FjdGlvbiIsInJ1biIsInN0b3JlUmVjb3JkIiwidGVhbVJlY29yZCIsInVwZGF0ZSIsInVwZGF0ZWRBdCIsImNvbnZEYXRlU3RyaW5nIiwidG9JU09TdHJpbmciLCJuYW1lIiwiYWJicmV2IiwidGVhbSIsImxhc3RVcGRhdGVkIiwidXBkYXRlZF9hdCIsImlzVG9kYXkiLCJob21lX3RlYW0iLCJ2aXNpdG9yX3RlYW0iLCJzZWFzb24iLCJob21lX3RlYW1fc2NvcmUiLCJ2aXNpdG9yX3RlYW1fc2NvcmUiLCJmdWxsTmFtZSIsImZ1bGxfbmFtZSIsImdldFRlYW1zIiwicHJlcG9wdWxhdGUiLCJ0ZWFtRGF0YSIsInRlYW1zIiwiYWJicmV2aWF0aW9uIiwidGVhbXNJbml0aWFsaXplZCIsInRlYW1Db3VudCIsImFyZ3MiLCJjb250ZXh0IiwiaW5mbyIsImVtYWlsIiwicXVlcmllcyIsImdxbCIsInJlc29sdmVycyIsInR5cGVEZWZzIiwiR2FtZSIsInR5cGVEZWYiLCJUZWFtIiwiVXNlciIsIm1lcmdlIiwiUXVlcnkiLCJwYXJlbnQiLCJ1c2VyIiwidG9kYXkiLCJzZWFzb25TdGFydCIsImdldEZ1bGxZZWFyIiwibGFzdFVwZGF0ZURhdGUiLCJnZXRUaW1lIiwiT05FX0RBWSIsInJlcGxhY2UiLCJBcG9sbG9TZXJ2ZXIiLCJkYlBhdGgiLCJwYXRoIiwiam9pbiIsIl9fZGlybmFtZSIsIkRhdGFiYXNlIiwiYXBwIiwiZXhwcmVzcyIsInNldFBvcnQiLCJwb3J0Iiwic2V0IiwiYXBwbHlNaWRkbGV3YXJlIiwiY29uc29sZSIsImxvZyIsImdyYXBocWxQYXRoIiwidXNlIiwiY29ycyIsIm9yaWdpbiIsIm9wdGlvbnNTdWNj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aEI7QUFDRDs7QUFDRHJILE1BQU0sQ0FBQ3VILGVBQVAsQ0FBdUI7QUFBRUw7QUFBRixDQUF2Qjs7QUFFQSxTQUFTakgsTUFBVCxHQUFrQjtBQUNoQmlILEtBQUcsQ0FBQ2pILE1BQUosQ0FBVztBQUFFb0gsUUFBSSxFQUFFO0FBQVIsR0FBWCxFQUEyQixNQUN6QkcsT0FBTyxDQUFDQyxHQUFSLENBQWEsMkNBQTBDekgsTUFBTSxDQUFDMEgsV0FBWSxFQUExRSxDQURGO0FBR0Q7O0FBRURSLEdBQUcsQ0FBQ1MsR0FBSixDQUFRQywyQ0FBSSxDQUFDO0FBQ1hDLFFBQU0sRUFBRSxHQURHO0FBQ0U7QUFDYkMsc0JBQW9CLEVBQUU7QUFGWCxDQUFELENBQVo7QUFLQVosR0FBRyxDQUFDbkcsR0FBSixDQUFRLGFBQVIsRUFBdUIsQ0FBQ2dILEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ25DQSxLQUFHLENBQUNDLElBQUosQ0FBUztBQUFFakYsVUFBTSxFQUFFO0FBQVYsR0FBVDtBQUNELENBRkQ7QUFJZTtBQUNia0YsUUFBTSxFQUFFLE1BQU1oQixHQUREO0FBRWJpQixXQUFTLEVBQUUsTUFBTW5JLE1BRko7QUFHYnNCLE9BQUssRUFBRSxNQUFNZixFQUhBO0FBSWI2RyxTQUphO0FBS2JuSDtBQUxhLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0Esa0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBzZXJ2ZXIgZnJvbSBcIi4vc2VydmVyXCI7XG5cbnNlcnZlci5saXN0ZW4oKTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyO1xuIiwiZXhwb3J0IGNvbnN0IE5CQV9URUFNX0NPVU5UOiBudW1iZXIgPSAzMDsiLCJpbXBvcnQgc2NoZW1hIGZyb20gXCIuL3NjaGVtYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBzY2hlbWE7IiwiaW1wb3J0IHJldHJpZXZlIGZyb20gXCIuL3JldHJpZXZlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmV0cmlldmUsXG59IiwiaW1wb3J0IHsgQXBvbGxvRXJyb3IgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmltcG9ydCBCZXR0ZXJTcWxpdGUzIGZyb20gXCJiZXR0ZXItc3FsaXRlM1wiO1xuXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgc2VydmVyIGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2ZXJcIjtcblxuY29uc3QgaGlnaGxpZ2h0U2VhcmNoUXVlcnkgPSAoZ2FtZTogR2FtZSwgZGI6IEJldHRlclNxbGl0ZTMuRGF0YWJhc2UpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB7IGhvbWUsIGF3YXksIGRhdGUgfSA9IGdhbWU7XG4gIGNvbnN0IHRlYW1OYW1lUXVlcnkgPSBkYi5wcmVwYXJlKFwiU0VMRUNUIG5hbWUgRlJPTSB0ZWFtcyBXSEVSRSBpZCA9ID9cIikucGx1Y2soKTtcbiAgY29uc3QgaG9tZU5hbWUgPSB0ZWFtTmFtZVF1ZXJ5LmdldChob21lKTtcbiAgY29uc3QgYXdheU5hbWUgPSB0ZWFtTmFtZVF1ZXJ5LmdldChhd2F5KTtcbiAgY29uc3QgZ2FtZURhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0RhdGVTdHJpbmcoKS5zbGljZSg0KTtcbiAgcmV0dXJuIGAke2F3YXlOYW1lfSB2cyAke2hvbWVOYW1lfSBGdWxsIEhpZ2hsaWdodHMgJHtnYW1lRGF0ZX1gO1xufTtcblxuY29uc3QgcmVzb2x2ZXIgPSAoZ2FtZTogR2FtZSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRiID0gc2VydmVyLmdldERiKCk7XG4gIHJldHVybiBoaWdobGlnaHRTZWFyY2hRdWVyeShnYW1lLCBkYik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlcjtcbiIsImltcG9ydCBoaWdobGlnaHRzIGZyb20gXCIuL2hpZ2hsaWdodHNcIjtcbmltcG9ydCByZXRyaWV2ZSBmcm9tIFwiLi9yZXRyaWV2ZVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi9zZWFyY2hcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBoaWdobGlnaHRzLFxuICByZXRyaWV2ZSxcbiAgc2VhcmNoLFxufVxuIiwiaW1wb3J0IHsgQXBvbGxvRXJyb3IgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCI7XG5cbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBzZXJ2ZXIgZnJvbSBcIi4uLy4uLy4uL3NlcnZlclwiO1xuXG5jb25zdCByZXNvbHZlciA9IChvYmosIHsgaWQgfSk6IEdhbWUgPT4ge1xuICBjb25zdCBkYiA9IHNlcnZlci5nZXREYigpO1xuICBjb25zdCBxdWVyeSA9IFwiU0VMRUNUICogRlJPTSBnYW1lcyBXSEVSRSBpZCA9ID9cIjtcbiAgY29uc3Qgc3RtdCA9IGRiLnByZXBhcmUocXVlcnkpO1xuICBsZXQgZ2FtZSA9IHN0bXQuZ2V0KGlkKTtcbiAgaWYgKCFnYW1lKSB7XG4gICAgdGhyb3cgbmV3IEFwb2xsb0Vycm9yKGBSZXF1ZXN0ZWQgZW50aXR5IG5vdCBmb3VuZCBmb3IgZ2l2ZW4gYXJncyBpZDogJyR7aWR9J2ApO1xuICB9XG4gIHJldHVybiB7XG4gICAgaG9tZVNjb3JlOiBnYW1lLmhvbWVfc2NvcmUsXG4gICAgYXdheVNjb3JlOiBnYW1lLmF3YXlfc2NvcmUsXG4gICAgd2lubmVyOiBnYW1lLndpbm5lcixcbiAgICAuLi5nYW1lLFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlcjtcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBzZXJ2ZXIgZnJvbSBcIi4uLy4uLy4uL3NlcnZlclwiO1xuXG5jb25zdCByZXNvbHZlciA9IChvYmosIHsgdGVhbUlkIH0pOiBBcnJheTxHYW1lPiA9PiB7XG4gIGNvbnN0IGRiID0gc2VydmVyLmdldERiKCk7XG4gIGNvbnN0IHN0bXQgPSBkYi5wcmVwYXJlKFwiU0VMRUNUICogRlJPTSBnYW1lcyBXSEVSRSBob21lID0gPyBPUiBhd2F5ID0gP1wiKTtcbiAgY29uc3QgZ2FtZXMgPSBzdG10LmFsbCh0ZWFtSWQsIHRlYW1JZCk7XG4gIHJldHVybiBnYW1lcy5tYXAoZ2FtZSA9PiAoe1xuICAgIGhvbWVTY29yZTogZ2FtZS5ob21lX3Njb3JlLFxuICAgIGF3YXlTY29yZTogZ2FtZS5hd2F5X3Njb3JlLFxuICAgIHdpbm5lcjogZ2FtZS53aW5uZXIsXG4gICAgLi4uZ2FtZSxcbiAgfSkpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlcjtcbiIsImltcG9ydCByZXRyaWV2ZSBmcm9tIFwiLi9yZXRyaWV2ZVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi9zZWFyY2hcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICByZXRyaWV2ZSxcbiAgc2VhcmNoLFxufSIsImltcG9ydCB7IEFwb2xsb0Vycm9yIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5pbXBvcnQgQmV0dGVyU3FsaXRlMyBmcm9tIFwiYmV0dGVyLXNxbGl0ZTNcIjtcblxuaW1wb3J0IHsgVGVhbSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCBzZXJ2ZXIgZnJvbSBcIi4uLy4uLy4uL3NlcnZlclwiO1xuaW1wb3J0IHsgY29udkRhdGVTdHJpbmcsIGdldEN1cnJTZWFzb25ZZWFyLCBpc1RvZGF5IH0gZnJvbSBcIi4uLy4uL3V0aWxcIjtcblxuY29uc3QgZ2V0R2FtZXMgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiA9PiB7XG4gIGNvbnN0IGN1cnJZZWFyID0gZ2V0Q3VyclNlYXNvblllYXIoKTtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vd3d3LmJhbGxkb250bGllLmlvL2FwaS92MS9nYW1lcz9zZWFzb25zW109JHtjdXJyWWVhcn0mdGVhbV9pZHNbXT0ke2lkfSZwZXJfcGFnZT0xMTBgO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhLmRhdGEuZmlsdGVyKChnYW1lOiBhbnkpID0+IGdhbWUuc3RhdHVzID09PSBcIkZpbmFsXCIpO1xufTtcblxuY29uc3QgZ2V0V2luTG9zcyA9ICh0ZWFtSWQ6IG51bWJlciwgZ2FtZXM6IEFycmF5PGFueT4pOiB7XG4gIHdpbnM6IG51bWJlcixcbiAgbG9zc2VzOiBudW1iZXIsXG59ID0+IHtcbiAgcmV0dXJuIGdhbWVzLnJlZHVjZSgocmVjb3JkLCBnYW1lKSA9PiB7XG4gICAgaWYgKGdhbWUud2lubmVyID09PSB0ZWFtSWQpIHtcbiAgICAgIHJlY29yZC53aW5zKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY29yZC5sb3NzZXMrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlY29yZDtcbiAgfSwge1xuICAgIHdpbnM6IDAsXG4gICAgbG9zc2VzOiAwLFxuICB9KTtcbn07XG5cbmNvbnN0IHN0b3JlR2FtZXMgPSAoZ2FtZXM6IEFycmF5PGFueT4sIGRiOiBCZXR0ZXJTcWxpdGUzLkRhdGFiYXNlKTogdm9pZCA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYElOU0VSVCBPUiBJR05PUkUgSU5UTyBnYW1lc1xuICAgIChpZCwgZGF0ZSwgaG9tZSwgYXdheSwgc2Vhc29uLCBob21lX3Njb3JlLCBhd2F5X3Njb3JlLCB3aW5uZXIpXG4gICAgVkFMVUVTIChAaWQsIEBkYXRlLCBAaG9tZSwgQGF3YXksIEBzZWFzb24sIEBob21lU2NvcmUsIEBhd2F5U2NvcmUsIEB3aW5uZXIpYDtcbiAgY29uc3QgaW5zZXJ0ID0gZGIucHJlcGFyZShxdWVyeSk7XG4gIGNvbnN0IGluc2VydE1hbnkgPSBkYi50cmFuc2FjdGlvbigoZ2FtZXM6IEFycmF5PGFueT4pID0+IHtcbiAgICBmb3IgKGNvbnN0IGdhbWUgb2YgZ2FtZXMpIGluc2VydC5ydW4oZ2FtZSk7XG4gIH0pO1xuICBpbnNlcnRNYW55KGdhbWVzKTtcbn07XG5cbmNvbnN0IHN0b3JlUmVjb3JkID0gKFxuICB0ZWFtSWQ6IG51bWJlcixcbiAgdGVhbVJlY29yZDogeyB3aW5zOiBudW1iZXIsIGxvc3NlczogbnVtYmVyIH0sXG4gIGRiOiBCZXR0ZXJTcWxpdGUzLkRhdGFiYXNlLFxuKTogdm9pZCA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYFVQREFURSB0ZWFtc1xuICAgIFNFVCB3aW5zID0gQHdpbnMsIGxvc3NlcyA9IEBsb3NzZXMsIHVwZGF0ZWRfYXQgPSBAdXBkYXRlZEF0IFdIRVJFIGlkID0gQGlkYDtcbiAgY29uc3QgdXBkYXRlID0gZGIucHJlcGFyZShxdWVyeSk7XG4gIHVwZGF0ZS5ydW4oe1xuICAgIGlkOiB0ZWFtSWQsXG4gICAgdXBkYXRlZEF0OiBjb252RGF0ZVN0cmluZygobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKSksXG4gICAgLi4udGVhbVJlY29yZCxcbiAgfSk7XG59O1xuXG5jb25zdCByZXNvbHZlciA9IGFzeW5jIChvYmosIHsgaWQsIG5hbWUsIGFiYnJldiB9KTogUHJvbWlzZTxUZWFtPiA9PiB7XG4gIGNvbnN0IGRiID0gc2VydmVyLmdldERiKCk7XG4gIGNvbnN0IHF1ZXJ5ID0gXCJTRUxFQ1QgKiBGUk9NIHRlYW1zIFdIRVJFIGlkID0gPyBPUiBuYW1lID0gPyBPUiBhYmJyZXYgPSA/XCI7XG4gIGNvbnN0IHN0bXQgPSBkYi5wcmVwYXJlKHF1ZXJ5KTtcbiAgbGV0IHRlYW0gPSBzdG10LmdldChpZCwgbmFtZSwgYWJicmV2KTtcbiAgaWYgKCF0ZWFtKSB7XG4gICAgdGhyb3cgbmV3IEFwb2xsb0Vycm9yKGBSZXF1ZXN0ZWQgZW50aXR5IG5vdCBmb3VuZCBmb3IgZ2l2ZW4gYXJncyBpZDogJyR7aWR9JywgbmFtZTogJyR7bmFtZX0nLCBhYmJyZXY6ICcke25hbWV9JyBgKTtcbiAgfVxuICBjb25zdCBsYXN0VXBkYXRlZCA9IHRlYW0udXBkYXRlZF9hdDtcbiAgaWYgKCFpc1RvZGF5KGxhc3RVcGRhdGVkKSkge1xuICAgIC8vIFJldHJpZXZlIGFueSBnYW1lcyB3ZSBtaXNzZWQgc2luY2UgbGFzdCB1cGRhdGVcbiAgICBsZXQgZ2FtZXMgPSBhd2FpdCBnZXRHYW1lcyh0ZWFtLmlkKTtcbiAgICBnYW1lcyA9IGdhbWVzLm1hcCgoZ2FtZTogYW55KSA9PiAoe1xuICAgICAgaWQ6IGdhbWUuaWQsXG4gICAgICBkYXRlOiAgY29udkRhdGVTdHJpbmcoZ2FtZS5kYXRlKSxcbiAgICAgIGhvbWU6IGdhbWUuaG9tZV90ZWFtLmlkLFxuICAgICAgYXdheTogZ2FtZS52aXNpdG9yX3RlYW0uaWQsXG4gICAgICBzZWFzb246IGdhbWUuc2Vhc29uLFxuICAgICAgaG9tZVNjb3JlOiBnYW1lLmhvbWVfdGVhbV9zY29yZSxcbiAgICAgIGF3YXlTY29yZTogZ2FtZS52aXNpdG9yX3RlYW1fc2NvcmUsXG4gICAgICB3aW5uZXI6IChnYW1lLmhvbWVfdGVhbV9zY29yZSA+IGdhbWUudmlzaXRvcl90ZWFtX3Njb3JlXG4gICAgICAgID8gZ2FtZS5ob21lX3RlYW0uaWRcbiAgICAgICAgOiBnYW1lLnZpc2l0b3JfdGVhbS5pZCksXG4gICAgfSkpO1xuICAgIHN0b3JlR2FtZXMoZ2FtZXMsIGRiKTtcbiAgICBjb25zdCB0ZWFtUmVjb3JkID0gZ2V0V2luTG9zcyh0ZWFtLmlkLCBnYW1lcyk7XG4gICAgc3RvcmVSZWNvcmQodGVhbS5pZCwgdGVhbVJlY29yZCwgZGIpO1xuICAgIHRlYW0ud2lucyA9IHRlYW1SZWNvcmQud2lucztcbiAgICB0ZWFtLmxvc3NlcyA9IHRlYW1SZWNvcmQubG9zc2VzO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGZ1bGxOYW1lOiB0ZWFtLmZ1bGxfbmFtZSxcbiAgICAuLi50ZWFtLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZXI7XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmltcG9ydCBCZXR0ZXJTcWxpdGUzIGZyb20gXCJiZXR0ZXItc3FsaXRlM1wiO1xuXG5pbXBvcnQgeyBUZWFtIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgc2VydmVyIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXJcIjtcbmltcG9ydCB7IE5CQV9URUFNX0NPVU5UIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBnZXRUZWFtcyA9IGFzeW5jICgpOiBQcm9taXNlPEFycmF5PGFueT4+ID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vd3d3LmJhbGxkb250bGllLmlvL2FwaS92MS90ZWFtc1wiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGEuZGF0YTtcbn1cblxuY29uc3QgcHJlcG9wdWxhdGUgPSBhc3luYyAoZGI6IEJldHRlclNxbGl0ZTMuRGF0YWJhc2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3QgdGVhbURhdGEgPSBhd2FpdCBnZXRUZWFtcygpO1xuICBjb25zdCB0ZWFtcyA9IHRlYW1EYXRhLm1hcCgodGVhbTogYW55KSA9PiAoe1xuICAgIGZ1bGxOYW1lOiB0ZWFtLmZ1bGxfbmFtZSxcbiAgICBhYmJyZXY6IHRlYW0uYWJicmV2aWF0aW9uLFxuICAgIC4uLnRlYW0sXG4gIH0pKVxuICBjb25zdCBpbnNlcnQgPSBkYi5wcmVwYXJlKGBJTlNFUlQgT1IgUkVQTEFDRSBJTlRPIHRlYW1zXG4gICAgKGlkLCBuYW1lLCBmdWxsX25hbWUsIGFiYnJldiwgY29uZmVyZW5jZSwgZGl2aXNpb24pXG4gICAgVkFMVUVTIChAaWQsIEBuYW1lLCBAZnVsbE5hbWUsIEBhYmJyZXYsIEBjb25mZXJlbmNlLCBAZGl2aXNpb24pYCk7XG5cbiAgY29uc3QgaW5zZXJ0TWFueSA9IGRiLnRyYW5zYWN0aW9uKHRlYW1zID0+IHtcbiAgICBmb3IgKGNvbnN0IHRlYW0gb2YgdGVhbXMpIGluc2VydC5ydW4odGVhbSk7XG4gIH0pO1xuXG4gIGluc2VydE1hbnkodGVhbXMpO1xufTtcblxuY29uc3QgdGVhbXNJbml0aWFsaXplZCA9IChkYjogQmV0dGVyU3FsaXRlMy5EYXRhYmFzZSk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBzdG10ID0gZGIucHJlcGFyZShcIlNFTEVDVCBDT1VOVCgqKSBBUyB0ZWFtQ291bnQgRlJPTSB0ZWFtc1wiKTtcbiAgY29uc3QgdGVhbUNvdW50ID0gc3RtdC5nZXQoKS50ZWFtQ291bnQ7XG4gIHJldHVybiB0ZWFtQ291bnQgPT09IE5CQV9URUFNX0NPVU5UO1xufVxuXG5jb25zdCByZXNvbHZlciA9ICgpOiBUZWFtW10gPT4ge1xuICBjb25zdCBkYiA9IHNlcnZlci5nZXREYigpO1xuICAvLyBTaG91bGQgb25seSBiZSBuZWVkZWQgZm9yIG5ldyBpbnN0YW5jZXMgaWYgdGhlIGFwcGxpY2F0aW9uLlxuICBpZiAoIXRlYW1zSW5pdGlhbGl6ZWQoZGIpKSB7XG4gICAgcHJlcG9wdWxhdGUoZGIpO1xuICB9XG4gIGNvbnN0IHN0bXQgPSBkYi5wcmVwYXJlKFwiU0VMRUNUICogRlJPTSB0ZWFtc1wiKTtcbiAgcmV0dXJuIHN0bXQuYWxsKCkubWFwKCh0ZWFtOiBhbnkpOiBUZWFtID0+ICh7XG4gICAgZnVsbE5hbWU6IHRlYW0uZnVsbF9uYW1lLFxuICAgIC4uLnRlYW0sXG4gIH0pKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVyO1xuIiwiaW1wb3J0IHJldHJpZXZlIGZyb20gXCIuL3JldHJpZXZlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmV0cmlldmUsXG59IiwiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jb25zdCByZXNvbHZlciA9IChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pIDogVXNlciA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQ6IFwiXCIsXG4gICAgbmFtZTogXCJcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICB0ZWFtczogW10sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZXI7XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCI7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEdhbWUsIFRlYW0sIFVzZXIgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBxdWVyaWVzOiBhbnkgPSBncWxgXG4gIHR5cGUgUXVlcnkge1xuICAgIF9lbXB0eTogU3RyaW5nXG4gIH1cbmA7XG5cbmNvbnN0IHJlc29sdmVyczogYW55ID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZURlZnM6IFtxdWVyaWVzLCBHYW1lLnR5cGVEZWYsIFRlYW0udHlwZURlZiwgVXNlci50eXBlRGVmXSxcbiAgcmVzb2x2ZXJzOiBtZXJnZShyZXNvbHZlcnMsIEdhbWUucmVzb2x2ZXJzLCBUZWFtLnJlc29sdmVycywgVXNlci5yZXNvbHZlcnMpLFxufTtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi8uLi9yZXNvbHZlcnMvZ2FtZVwiO1xuaW1wb3J0IFRlYW0gZnJvbSBcIi4uLy4uL3Jlc29sdmVycy90ZWFtXCI7XG5cbmNvbnN0IHR5cGVEZWYgPSBncWxgXG4gIHR5cGUgR2FtZSB7XG4gICAgaWQ6IElEIVxuICAgIGRhdGU6IFN0cmluZyFcbiAgICBob21lOiBUZWFtIVxuICAgIGF3YXk6IFRlYW0hXG4gICAgc2Vhc29uOiBJbnQhXG4gICAgaG9tZVNjb3JlOiBJbnQhXG4gICAgYXdheVNjb3JlOiBJbnQhXG4gICAgd2lubmVyOiBUZWFtIVxuICAgIGhpZ2hsaWdodHM6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgR2FtZUxpc3Qge1xuICAgIGl0ZW1zOiBbR2FtZV0hXG4gIH1cblxuICBleHRlbmQgdHlwZSBRdWVyeSB7XG4gICAgZ2FtZShpZDogSUQgPSBcIlwiKTogR2FtZVxuICB9XG5gXG5cbmNvbnN0IHJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICBnYW1lOiBHYW1lLnJldHJpZXZlLFxuICB9LFxuICBHYW1lOiB7XG4gICAgaG9tZTogZ2FtZSA9PiBUZWFtLnJldHJpZXZlKGdhbWUsIHsgaWQ6IGdhbWUuaG9tZSwgbmFtZTogXCJcIiwgYWJicmV2OiBcIlwiIH0pLFxuICAgIGF3YXk6IGdhbWUgPT4gVGVhbS5yZXRyaWV2ZShnYW1lLCB7IGlkOiBnYW1lLmF3YXksIG5hbWU6IFwiXCIsIGFiYnJldjogXCJcIiB9KSxcbiAgICB3aW5uZXI6IGdhbWUgPT4gVGVhbS5yZXRyaWV2ZShnYW1lLCB7IGlkOiBnYW1lLndpbm5lciwgbmFtZTogXCJcIiwgYWJicmV2OiBcIlwiIH0pLFxuICAgIGhpZ2hsaWdodHM6IGdhbWUgPT4gR2FtZS5oaWdobGlnaHRzLnJldHJpZXZlKGdhbWUpLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlRGVmLFxuICByZXNvbHZlcnMsXG59O1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBUZWFtIGZyb20gXCIuL3RlYW1cIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL3VzZXJcIjtcblxuZXhwb3J0IHtcbiAgR2FtZSxcbiAgVGVhbSxcbiAgVXNlcixcbn07XG4iLCJpbXBvcnQgVGVhbSBmcm9tICcuL3RlYW0nO1xuXG5leHBvcnQgZGVmYXVsdCBUZWFtO1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiO1xuaW1wb3J0IFRlYW0gZnJvbSBcIi4uLy4uL3Jlc29sdmVycy90ZWFtXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vLi4vcmVzb2x2ZXJzL2dhbWVcIjtcblxuY29uc3QgdHlwZURlZiA9IGdxbGBcbiAgdHlwZSBUZWFtIHtcbiAgICBpZDogSUQhXG4gICAgbmFtZTogU3RyaW5nIVxuICAgIGZ1bGxOYW1lOiBTdHJpbmchXG4gICAgYWJicmV2OiBTdHJpbmchXG4gICAgY29uZmVyZW5jZTogU3RyaW5nIVxuICAgIGRpdmlzaW9uOiBTdHJpbmchXG4gICAgd2luczogSW50IVxuICAgIGxvc3NlczogSW50IVxuICAgIGdhbWVzOiBbR2FtZV0hXG4gIH1cblxuICBleHRlbmQgdHlwZSBRdWVyeSB7XG4gICAgdGVhbShpZDogSUQgPSBcIlwiLCBuYW1lOiBTdHJpbmcgPSBcIlwiLCBhYmJyZXY6IFN0cmluZyA9IFwiXCIpOiBUZWFtXG4gICAgdGVhbXM6IFtUZWFtXVxuICB9XG5gO1xuXG5jb25zdCByZXNvbHZlcnMgPSB7XG4gIFF1ZXJ5OiB7XG4gICAgdGVhbTogVGVhbS5yZXRyaWV2ZSxcbiAgICB0ZWFtczogVGVhbS5zZWFyY2gsXG4gIH0sXG4gIFRlYW06IHtcbiAgICBnYW1lczogcGFyZW50ID0+IEdhbWUuc2VhcmNoKG51bGwsIHsgdGVhbUlkOiBwYXJlbnQuaWQgfSlcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlRGVmLFxuICByZXNvbHZlcnMsXG59O1xuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi9yZXNvbHZlcnMvdXNlclwiO1xuXG5jb25zdCB0eXBlRGVmID0gZ3FsYFxuICB0eXBlIFVzZXIge1xuICAgIGlkOiBJRCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgZW1haWw6IFN0cmluZyFcbiAgICB0ZWFtczogW1RlYW1dXG4gIH1cblxuICBleHRlbmQgdHlwZSBRdWVyeSB7XG4gICAgdXNlcihpZDogSUQhKTogVXNlclxuICB9XG5gXG5cbmNvbnN0IHJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICB1c2VyOiBVc2VyLnJldHJpZXZlLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlRGVmLFxuICByZXNvbHZlcnMsXG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldEN1cnJTZWFzb25ZZWFyID0gKCkgPT4ge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHNlYXNvblN0YXJ0ID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgOSk7XG4gIC8vIElmIHRoZSBjdXJyZW50IG1vbnRoIGlzIGJlZm9yZSAgb2N0b2JlciwgdGhlbiB1c2UgdGhlIHByaW9yIHllYXJcbiAgaWYgKHRvZGF5IDwgc2Vhc29uU3RhcnQpIHtcbiAgICByZXR1cm4gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIDE7XG4gIH1cbiAgcmV0dXJuIHRvZGF5LmdldEZ1bGxZZWFyKCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNUb2RheSA9IChkYXRlOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgbGFzdFVwZGF0ZURhdGU6IG51bWJlciA9IG5ldyBEYXRlKGRhdGUpLmdldFRpbWUoKTtcbiAgY29uc3QgdG9kYXk6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBjb25zdCBPTkVfREFZID0gNjAgKiA2MCAqIDI0ICogMTAwMDtcbiAgcmV0dXJuICh0b2RheSAtIGxhc3RVcGRhdGVEYXRlKSA8IE9ORV9EQVk7XG59O1xuXG5leHBvcnQgY29uc3QgY29udkRhdGVTdHJpbmcgPSAoZGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGRhdGUucmVwbGFjZSgvW1RaXS9nLCBcIiBcIikuc2xpY2UoMCwtNSk7XG59O1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgRGF0YWJhc2UgZnJvbSBcImJldHRlci1zcWxpdGUzXCI7XG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXIsIGdxbCB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgc2NoZW1hIGZyb20gXCIuL21vZHVsZXNcIjtcblxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gIHR5cGVEZWZzOiBzY2hlbWEudHlwZURlZnMsXG4gIHJlc29sdmVyczogc2NoZW1hLnJlc29sdmVycyxcbn0pO1xuXG5jb25zdCBkYlBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uL2RiXCIsIFwiaG9vcC13YXRjaGVyLmRiXCIpO1xuY29uc3QgZGI6IGFueSA9IG5ldyBEYXRhYmFzZShkYlBhdGgpO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5mdW5jdGlvbiBzZXRQb3J0KHBvcnQgPSA0MDAwKSB7XG4gIGFwcC5zZXQoJ3BvcnQnLCBwb3J0KTtcbn1cbnNlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAgfSk7XG5cbmZ1bmN0aW9uIGxpc3RlbigpIHtcbiAgYXBwLmxpc3Rlbih7IHBvcnQ6IDQwMDAgfSwgKCkgPT5cbiAgICBjb25zb2xlLmxvZyhg8J+agCBTZXJ2ZXIgcmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDo0MDAwJHtzZXJ2ZXIuZ3JhcGhxbFBhdGh9YClcbiAgKTtcbn1cblxuYXBwLnVzZShjb3JzKHtcbiAgb3JpZ2luOiAnKicsIC8vIEJlIHN1cmUgdG8gc3dpdGNoIHRvIHlvdXIgcHJvZHVjdGlvbiBkb21haW5cbiAgb3B0aW9uc1N1Y2Nlc3NTdGF0dXM6IDIwMFxufSkpO1xuXG5hcHAuZ2V0KCcvYXBpL3N0YXR1cycsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7IHN0YXR1czogJ29rJyB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEFwcDogKCkgPT4gYXBwLFxuICBnZXRTZXJ2ZXI6ICgpID0+IHNlcnZlcixcbiAgZ2V0RGI6ICgpID0+IGRiLFxuICBzZXRQb3J0LFxuICBsaXN0ZW4sXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJldHRlci1zcWxpdGUzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=