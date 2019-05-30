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
/* harmony import */ var _retrieve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieve */ "./src/modules/resolvers/game/retrieve.ts");
/* harmony import */ var _highlights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlights */ "./src/modules/resolvers/game/highlights/index.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
  retrieve: _retrieve__WEBPACK_IMPORTED_MODULE_0__["default"],
  highlights: _highlights__WEBPACK_IMPORTED_MODULE_1__["default"]
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
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

const transform = resolverOutput => {
  return {
    items: resolverOutput
  };
};

const resolver = () => {
  const db = _server__WEBPACK_IMPORTED_MODULE_1__["default"].getDb(); // Should only be needed for new instances if the application.

  if (!teamsInitialized(db)) {
    prepopulate(db);
  }

  const stmt = db.prepare("SELECT * FROM teams");
  const teams = stmt.all().map(team => _objectSpread({
    fullName: team.full_name
  }, team));
  return transform(teams);
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
  }

  type TeamList {
    items: [Team]!
  }

  extend type Query {
    team(id: ID = "", name: String = "", abbrev: String = ""): Team
    teams: TeamList
  }

`;
const resolvers = {
  Query: {
    team: _resolvers_team__WEBPACK_IMPORTED_MODULE_1__["default"].retrieve,
    teams: _resolvers_team__WEBPACK_IMPORTED_MODULE_1__["default"].search
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
    teams: [String]
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
  const lastUpdateDate = new Date(date);
  const today = new Date();
  return lastUpdateDate.getDate() === today.getDate() && lastUpdateDate.getMonth() === today.getMonth() && lastUpdateDate.getFullYear() === today.getFullYear();
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
const db = new better_sqlite3__WEBPACK_IMPORTED_MODULE_2___default.a(dbPath, {
  verbose: console.log
});
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

module.exports = __webpack_require__(/*! /Users/wesleyt/Documents/Github/hoop-watcher/server/src/app.ts */"./src/app.ts");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcmVzb2x2ZXJzL2dhbWUvaGlnaGxpZ2h0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yZXNvbHZlcnMvZ2FtZS9oaWdobGlnaHRzL3JldHJpZXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Jlc29sdmVycy9nYW1lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Jlc29sdmVycy9nYW1lL3JldHJpZXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Jlc29sdmVycy90ZWFtL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Jlc29sdmVycy90ZWFtL3JldHJpZXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Jlc29sdmVycy90ZWFtL3NlYXJjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yZXNvbHZlcnMvdXNlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yZXNvbHZlcnMvdXNlci9yZXRyaWV2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdHlwZXMvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3R5cGVzL2dhbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdHlwZXMvdGVhbS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy90eXBlcy90ZWFtL3RlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdHlwZXMvdXNlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy90eXBlcy91c2VyL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJldHRlci1zcWxpdGUzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbInNlcnZlciIsImxpc3RlbiIsIk5CQV9URUFNX0NPVU5UIiwic2NoZW1hIiwicmV0cmlldmUiLCJoaWdobGlnaHRTZWFyY2hRdWVyeSIsImdhbWUiLCJkYiIsImhvbWUiLCJhd2F5IiwiZGF0ZSIsInRlYW1OYW1lUXVlcnkiLCJwcmVwYXJlIiwicGx1Y2siLCJob21lTmFtZSIsImdldCIsImF3YXlOYW1lIiwiZ2FtZURhdGUiLCJEYXRlIiwidG9EYXRlU3RyaW5nIiwic2xpY2UiLCJyZXNvbHZlciIsImdldERiIiwiaGlnaGxpZ2h0cyIsIm9iaiIsImlkIiwicXVlcnkiLCJzdG10IiwiQXBvbGxvRXJyb3IiLCJob21lU2NvcmUiLCJob21lX3Njb3JlIiwiYXdheVNjb3JlIiwiYXdheV9zY29yZSIsIndpbm5lciIsInNlYXJjaCIsImdldEdhbWVzIiwiY3VyclllYXIiLCJnZXRDdXJyU2Vhc29uWWVhciIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImZpbHRlciIsInN0YXR1cyIsImdldFdpbkxvc3MiLCJ0ZWFtSWQiLCJnYW1lcyIsInJlZHVjZSIsInJlY29yZCIsIndpbnMiLCJsb3NzZXMiLCJzdG9yZUdhbWVzIiwiaW5zZXJ0IiwiaW5zZXJ0TWFueSIsInRyYW5zYWN0aW9uIiwicnVuIiwic3RvcmVSZWNvcmQiLCJ0ZWFtUmVjb3JkIiwidXBkYXRlIiwidXBkYXRlZEF0IiwiY29udkRhdGVTdHJpbmciLCJ0b0lTT1N0cmluZyIsIm5hbWUiLCJhYmJyZXYiLCJ0ZWFtIiwibGFzdFVwZGF0ZWQiLCJ1cGRhdGVkX2F0IiwiaXNUb2RheSIsIm1hcCIsImhvbWVfdGVhbSIsInZpc2l0b3JfdGVhbSIsInNlYXNvbiIsImhvbWVfdGVhbV9zY29yZSIsInZpc2l0b3JfdGVhbV9zY29yZSIsImZ1bGxOYW1lIiwiZnVsbF9uYW1lIiwiZ2V0VGVhbXMiLCJwcmVwb3B1bGF0ZSIsInRlYW1EYXRhIiwidGVhbXMiLCJhYmJyZXZpYXRpb24iLCJ0ZWFtc0luaXRpYWxpemVkIiwidGVhbUNvdW50IiwidHJhbnNmb3JtIiwicmVzb2x2ZXJPdXRwdXQiLCJpdGVtcyIsImFsbCIsImFyZ3MiLCJjb250ZXh0IiwiaW5mbyIsImVtYWlsIiwicXVlcmllcyIsImdxbCIsInJlc29sdmVycyIsInR5cGVEZWZzIiwiR2FtZSIsInR5cGVEZWYiLCJUZWFtIiwiVXNlciIsIm1lcmdlIiwiUXVlcnkiLCJ1c2VyIiwidG9kYXkiLCJzZWFzb25TdGFydCIsImdldEZ1bGxZZWFyIiwibGFzdFVwZGF0ZURhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJyZXBsYWNlIiwiQXBvbGxvU2VydmVyIiwiZGJQYXRoIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJEYXRhYmFzZSIsInZlcmJvc2UiLCJjb25zb2xlIiwibG9nIiwiYXBwIiwiZXhwcmVzcyIsInNldFBvcnQiLCJwb3J0Iiwic2V0IiwiYXBwbHlNaWRkbGV3YXJlIiwiZ3JhcGhxbFBhdGgiLCJ1c2UiLCJjb3JzIiwib3JpZ2luIiwib3B0aW9uc1N1Y2Nlc3NTdGF0dXMiLCJy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LEdBQVQ7QUFDRCxDQUZEO0FBSWU7QUFDYnlGLFFBQU0sRUFBRSxNQUFNZCxHQUREO0FBRWJlLFdBQVMsRUFBRSxNQUFNdEksTUFGSjtBQUdic0IsT0FBSyxFQUFFLE1BQU1mLEVBSEE7QUFJYmtILFNBSmE7QUFLYnhIO0FBTGEsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHNlcnZlciBmcm9tIFwiLi9zZXJ2ZXJcIjtcblxuc2VydmVyLmxpc3RlbigpO1xuXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXI7XG4iLCJleHBvcnQgY29uc3QgTkJBX1RFQU1fQ09VTlQ6IG51bWJlciA9IDMwOyIsImltcG9ydCBzY2hlbWEgZnJvbSBcIi4vc2NoZW1hXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHNjaGVtYTsiLCJpbXBvcnQgcmV0cmlldmUgZnJvbSBcIi4vcmV0cmlldmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICByZXRyaWV2ZSxcbn0iLCJpbXBvcnQgeyBBcG9sbG9FcnJvciB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xuaW1wb3J0IEJldHRlclNxbGl0ZTMgZnJvbSBcImJldHRlci1zcWxpdGUzXCI7XG5cbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBzZXJ2ZXIgZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZlclwiO1xuXG5jb25zdCBoaWdobGlnaHRTZWFyY2hRdWVyeSA9IChnYW1lOiBHYW1lLCBkYjogQmV0dGVyU3FsaXRlMy5EYXRhYmFzZSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHsgaG9tZSwgYXdheSwgZGF0ZSB9ID0gZ2FtZTtcbiAgY29uc3QgdGVhbU5hbWVRdWVyeSA9IGRiLnByZXBhcmUoXCJTRUxFQ1QgbmFtZSBGUk9NIHRlYW1zIFdIRVJFIGlkID0gP1wiKS5wbHVjaygpO1xuICBjb25zdCBob21lTmFtZSA9IHRlYW1OYW1lUXVlcnkuZ2V0KGhvbWUpO1xuICBjb25zdCBhd2F5TmFtZSA9IHRlYW1OYW1lUXVlcnkuZ2V0KGF3YXkpO1xuICBjb25zdCBnYW1lRGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvRGF0ZVN0cmluZygpLnNsaWNlKDQpO1xuICByZXR1cm4gYCR7YXdheU5hbWV9IHZzICR7aG9tZU5hbWV9IEZ1bGwgSGlnaGxpZ2h0cyAke2dhbWVEYXRlfWA7XG59O1xuXG5jb25zdCByZXNvbHZlciA9IChnYW1lOiBHYW1lKTogc3RyaW5nID0+IHtcbiAgY29uc3QgZGIgPSBzZXJ2ZXIuZ2V0RGIoKTtcbiAgcmV0dXJuIGhpZ2hsaWdodFNlYXJjaFF1ZXJ5KGdhbWUsIGRiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVyO1xuIiwiaW1wb3J0IHJldHJpZXZlIGZyb20gXCIuL3JldHJpZXZlXCI7XG5pbXBvcnQgaGlnaGxpZ2h0cyBmcm9tIFwiLi9oaWdobGlnaHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmV0cmlldmUsXG4gIGhpZ2hsaWdodHMsXG59IiwiaW1wb3J0IHsgQXBvbGxvRXJyb3IgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmltcG9ydCBCZXR0ZXJTcWxpdGUzIGZyb20gXCJiZXR0ZXItc3FsaXRlM1wiO1xuXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgc2VydmVyIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXJcIjtcblxuY29uc3QgcmVzb2x2ZXIgPSAob2JqLCB7IGlkIH0pOiBHYW1lID0+IHtcbiAgY29uc3QgZGIgPSBzZXJ2ZXIuZ2V0RGIoKTtcbiAgY29uc3QgcXVlcnkgPSBcIlNFTEVDVCAqIEZST00gZ2FtZXMgV0hFUkUgaWQgPSA/XCI7XG4gIGNvbnN0IHN0bXQgPSBkYi5wcmVwYXJlKHF1ZXJ5KTtcbiAgbGV0IGdhbWUgPSBzdG10LmdldChpZCk7XG4gIGlmICghZ2FtZSkge1xuICAgIHRocm93IG5ldyBBcG9sbG9FcnJvcihgUmVxdWVzdGVkIGVudGl0eSBub3QgZm91bmQgZm9yIGdpdmVuIGFyZ3MgaWQ6ICcke2lkfSdgKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhvbWVTY29yZTogZ2FtZS5ob21lX3Njb3JlLFxuICAgIGF3YXlTY29yZTogZ2FtZS5hd2F5X3Njb3JlLFxuICAgIHdpbm5lcjogZ2FtZS53aW5uZXIsXG4gICAgLi4uZ2FtZSxcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZXI7XG4iLCJpbXBvcnQgcmV0cmlldmUgZnJvbSBcIi4vcmV0cmlldmVcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4vc2VhcmNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmV0cmlldmUsXG4gIHNlYXJjaCxcbn0iLCJpbXBvcnQgeyBBcG9sbG9FcnJvciB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xuaW1wb3J0IEJldHRlclNxbGl0ZTMgZnJvbSBcImJldHRlci1zcWxpdGUzXCI7XG5cbmltcG9ydCB7IFRlYW0gfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgc2VydmVyIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXJcIjtcbmltcG9ydCB7IGNvbnZEYXRlU3RyaW5nLCBnZXRDdXJyU2Vhc29uWWVhciwgaXNUb2RheSB9IGZyb20gXCIuLi8uLi91dGlsXCI7XG5cblxuY29uc3QgZ2V0R2FtZXMgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiA9PiB7XG4gIGNvbnN0IGN1cnJZZWFyID0gZ2V0Q3VyclNlYXNvblllYXIoKTtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vd3d3LmJhbGxkb250bGllLmlvL2FwaS92MS9nYW1lcz9zZWFzb25zW109JHtjdXJyWWVhcn0mdGVhbV9pZHNbXT0ke2lkfSZwZXJfcGFnZT0xMTBgO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhLmRhdGEuZmlsdGVyKChnYW1lOiBhbnkpID0+IGdhbWUuc3RhdHVzID09PSBcIkZpbmFsXCIpO1xufTtcblxuY29uc3QgZ2V0V2luTG9zcyA9ICh0ZWFtSWQ6IG51bWJlciwgZ2FtZXM6IEFycmF5PGFueT4pOiB7XG4gIHdpbnM6IG51bWJlcixcbiAgbG9zc2VzOiBudW1iZXIsXG59ID0+IHtcbiAgcmV0dXJuIGdhbWVzLnJlZHVjZSgocmVjb3JkLCBnYW1lKSA9PiB7XG4gICAgaWYgKGdhbWUud2lubmVyID09PSB0ZWFtSWQpIHtcbiAgICAgIHJlY29yZC53aW5zKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY29yZC5sb3NzZXMrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlY29yZDtcbiAgfSwge1xuICAgIHdpbnM6IDAsXG4gICAgbG9zc2VzOiAwLFxuICB9KTtcbn07XG5cbmNvbnN0IHN0b3JlR2FtZXMgPSAoZ2FtZXM6IEFycmF5PGFueT4sIGRiOiBCZXR0ZXJTcWxpdGUzLkRhdGFiYXNlKTogdm9pZCA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYElOU0VSVCBPUiBJR05PUkUgSU5UTyBnYW1lc1xuICAgIChpZCwgZGF0ZSwgaG9tZSwgYXdheSwgc2Vhc29uLCBob21lX3Njb3JlLCBhd2F5X3Njb3JlLCB3aW5uZXIpXG4gICAgVkFMVUVTIChAaWQsIEBkYXRlLCBAaG9tZSwgQGF3YXksIEBzZWFzb24sIEBob21lU2NvcmUsIEBhd2F5U2NvcmUsIEB3aW5uZXIpYDtcbiAgY29uc3QgaW5zZXJ0ID0gZGIucHJlcGFyZShxdWVyeSk7XG4gIGNvbnN0IGluc2VydE1hbnkgPSBkYi50cmFuc2FjdGlvbigoZ2FtZXM6IEFycmF5PGFueT4pID0+IHtcbiAgICBmb3IgKGNvbnN0IGdhbWUgb2YgZ2FtZXMpIGluc2VydC5ydW4oZ2FtZSk7XG4gIH0pO1xuICBpbnNlcnRNYW55KGdhbWVzKTtcbn07XG5cbmNvbnN0IHN0b3JlUmVjb3JkID0gKFxuICB0ZWFtSWQ6IG51bWJlcixcbiAgdGVhbVJlY29yZDogeyB3aW5zOiBudW1iZXIsIGxvc3NlczogbnVtYmVyIH0sXG4gIGRiOiBCZXR0ZXJTcWxpdGUzLkRhdGFiYXNlLFxuKTogdm9pZCA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYFVQREFURSB0ZWFtc1xuICAgIFNFVCB3aW5zID0gQHdpbnMsIGxvc3NlcyA9IEBsb3NzZXMsIHVwZGF0ZWRfYXQgPSBAdXBkYXRlZEF0IFdIRVJFIGlkID0gQGlkYDtcbiAgY29uc3QgdXBkYXRlID0gZGIucHJlcGFyZShxdWVyeSk7XG4gIHVwZGF0ZS5ydW4oe1xuICAgIGlkOiB0ZWFtSWQsXG4gICAgdXBkYXRlZEF0OiBjb252RGF0ZVN0cmluZygobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKSksXG4gICAgLi4udGVhbVJlY29yZCxcbiAgfSk7XG59O1xuXG5jb25zdCByZXNvbHZlciA9IGFzeW5jIChvYmosIHsgaWQsIG5hbWUsIGFiYnJldiB9KTogUHJvbWlzZTxUZWFtPiA9PiB7XG4gIGNvbnN0IGRiID0gc2VydmVyLmdldERiKCk7XG4gIGNvbnN0IHF1ZXJ5ID0gXCJTRUxFQ1QgKiBGUk9NIHRlYW1zIFdIRVJFIGlkID0gPyBPUiBuYW1lID0gPyBPUiBhYmJyZXYgPSA/XCI7XG4gIGNvbnN0IHN0bXQgPSBkYi5wcmVwYXJlKHF1ZXJ5KTtcbiAgbGV0IHRlYW0gPSBzdG10LmdldChpZCwgbmFtZSwgYWJicmV2KTtcbiAgaWYgKCF0ZWFtKSB7XG4gICAgdGhyb3cgbmV3IEFwb2xsb0Vycm9yKGBSZXF1ZXN0ZWQgZW50aXR5IG5vdCBmb3VuZCBmb3IgZ2l2ZW4gYXJncyBpZDogJyR7aWR9JywgbmFtZTogJyR7bmFtZX0nLCBhYmJyZXY6ICcke25hbWV9JyBgKTtcbiAgfVxuICBjb25zdCBsYXN0VXBkYXRlZCA9IHRlYW0udXBkYXRlZF9hdDtcbiAgaWYgKCFpc1RvZGF5KGxhc3RVcGRhdGVkKSkge1xuICAgIC8vIFJldHJpZXZlIGFueSBnYW1lcyB3ZSBtaXNzZWQgc2luY2UgbGFzdCB1cGRhdGVcbiAgICBsZXQgZ2FtZXMgPSBhd2FpdCBnZXRHYW1lcyh0ZWFtLmlkKTtcbiAgICBnYW1lcyA9IGdhbWVzLm1hcCgoZ2FtZTogYW55KSA9PiAoe1xuICAgICAgaWQ6IGdhbWUuaWQsXG4gICAgICBkYXRlOiAgY29udkRhdGVTdHJpbmcoZ2FtZS5kYXRlKSxcbiAgICAgIGhvbWU6IGdhbWUuaG9tZV90ZWFtLmlkLFxuICAgICAgYXdheTogZ2FtZS52aXNpdG9yX3RlYW0uaWQsXG4gICAgICBzZWFzb246IGdhbWUuc2Vhc29uLFxuICAgICAgaG9tZVNjb3JlOiBnYW1lLmhvbWVfdGVhbV9zY29yZSxcbiAgICAgIGF3YXlTY29yZTogZ2FtZS52aXNpdG9yX3RlYW1fc2NvcmUsXG4gICAgICB3aW5uZXI6IChnYW1lLmhvbWVfdGVhbV9zY29yZSA+IGdhbWUudmlzaXRvcl90ZWFtX3Njb3JlXG4gICAgICAgID8gZ2FtZS5ob21lX3RlYW0uaWRcbiAgICAgICAgOiBnYW1lLnZpc2l0b3JfdGVhbS5pZCksXG4gICAgfSkpO1xuICAgIHN0b3JlR2FtZXMoZ2FtZXMsIGRiKTtcbiAgICBjb25zdCB0ZWFtUmVjb3JkID0gZ2V0V2luTG9zcyh0ZWFtLmlkLCBnYW1lcyk7XG4gICAgc3RvcmVSZWNvcmQodGVhbS5pZCwgdGVhbVJlY29yZCwgZGIpO1xuICAgIHRlYW0ud2lucyA9IHRlYW1SZWNvcmQud2lucztcbiAgICB0ZWFtLmxvc3NlcyA9IHRlYW1SZWNvcmQubG9zc2VzO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGZ1bGxOYW1lOiB0ZWFtLmZ1bGxfbmFtZSxcbiAgICAuLi50ZWFtLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZXI7IiwiaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5pbXBvcnQgQmV0dGVyU3FsaXRlMyBmcm9tIFwiYmV0dGVyLXNxbGl0ZTNcIjtcblxuaW1wb3J0IHsgVGVhbSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHNlcnZlciBmcm9tIFwiLi4vLi4vLi4vc2VydmVyXCI7XG5pbXBvcnQgeyBOQkFfVEVBTV9DT1VOVCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgZ2V0VGVhbXMgPSBhc3luYyAoKTogUHJvbWlzZTxBcnJheTxhbnk+PiA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3d3dy5iYWxsZG9udGxpZS5pby9hcGkvdjEvdGVhbXNcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhLmRhdGE7XG59XG5cbmNvbnN0IHByZXBvcHVsYXRlID0gYXN5bmMgKGRiOiBCZXR0ZXJTcWxpdGUzLkRhdGFiYXNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGNvbnN0IHRlYW1EYXRhID0gYXdhaXQgZ2V0VGVhbXMoKTtcbiAgY29uc3QgdGVhbXMgPSB0ZWFtRGF0YS5tYXAoKHRlYW06IGFueSkgPT4gKHtcbiAgICBmdWxsTmFtZTogdGVhbS5mdWxsX25hbWUsXG4gICAgYWJicmV2OiB0ZWFtLmFiYnJldmlhdGlvbixcbiAgICAuLi50ZWFtLFxuICB9KSlcbiAgY29uc3QgaW5zZXJ0ID0gZGIucHJlcGFyZShgSU5TRVJUIE9SIFJFUExBQ0UgSU5UTyB0ZWFtcyBcbiAgICAoaWQsIG5hbWUsIGZ1bGxfbmFtZSwgYWJicmV2LCBjb25mZXJlbmNlLCBkaXZpc2lvbilcbiAgICBWQUxVRVMgKEBpZCwgQG5hbWUsIEBmdWxsTmFtZSwgQGFiYnJldiwgQGNvbmZlcmVuY2UsIEBkaXZpc2lvbilgKTtcblxuICBjb25zdCBpbnNlcnRNYW55ID0gZGIudHJhbnNhY3Rpb24odGVhbXMgPT4ge1xuICAgIGZvciAoY29uc3QgdGVhbSBvZiB0ZWFtcykgaW5zZXJ0LnJ1bih0ZWFtKTtcbiAgfSk7XG4gIFxuICBpbnNlcnRNYW55KHRlYW1zKTtcbn07XG5cbmNvbnN0IHRlYW1zSW5pdGlhbGl6ZWQgPSAoZGI6IEJldHRlclNxbGl0ZTMuRGF0YWJhc2UpOiBib29sZWFuID0+IHtcbiAgY29uc3Qgc3RtdCA9IGRiLnByZXBhcmUoXCJTRUxFQ1QgQ09VTlQoKikgQVMgdGVhbUNvdW50IEZST00gdGVhbXNcIik7XG4gIGNvbnN0IHRlYW1Db3VudCA9IHN0bXQuZ2V0KCkudGVhbUNvdW50O1xuICByZXR1cm4gdGVhbUNvdW50ID09PSBOQkFfVEVBTV9DT1VOVDtcbn1cblxuY29uc3QgdHJhbnNmb3JtID0gKHJlc29sdmVyT3V0cHV0OiBUZWFtW10pOiBhbnkgPT4ge1xuICByZXR1cm4ge1xuICAgIGl0ZW1zOiByZXNvbHZlck91dHB1dCxcbiAgfTtcbn07XG5cbmNvbnN0IHJlc29sdmVyID0gKCk6IFRlYW1bXSA9PiB7XG4gIGNvbnN0IGRiID0gc2VydmVyLmdldERiKCk7XG4gIC8vIFNob3VsZCBvbmx5IGJlIG5lZWRlZCBmb3IgbmV3IGluc3RhbmNlcyBpZiB0aGUgYXBwbGljYXRpb24uXG4gIGlmICghdGVhbXNJbml0aWFsaXplZChkYikpIHtcbiAgICBwcmVwb3B1bGF0ZShkYik7XG4gIH1cbiAgY29uc3Qgc3RtdCA9IGRiLnByZXBhcmUoXCJTRUxFQ1QgKiBGUk9NIHRlYW1zXCIpO1xuICBjb25zdCB0ZWFtcyA9IHN0bXQuYWxsKCkubWFwKCh0ZWFtOiBhbnkpOiBUZWFtID0+ICh7XG4gICAgZnVsbE5hbWU6IHRlYW0uZnVsbF9uYW1lLFxuICAgIC4uLnRlYW0sXG4gIH0pKTtcbiAgcmV0dXJuIHRyYW5zZm9ybSh0ZWFtcyk7XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZXI7IiwiaW1wb3J0IHJldHJpZXZlIGZyb20gXCIuL3JldHJpZXZlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmV0cmlldmUsXG59IiwiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jb25zdCByZXNvbHZlciA9IChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pIDogVXNlciA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQ6IFwiXCIsXG4gICAgbmFtZTogXCJcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICB0ZWFtczogW10sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZXI7XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCI7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEdhbWUsIFRlYW0sIFVzZXIgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBxdWVyaWVzOiBhbnkgPSBncWxgXG4gIHR5cGUgUXVlcnkge1xuICAgIF9lbXB0eTogU3RyaW5nXG4gIH1cbmA7XG5cbmNvbnN0IHJlc29sdmVyczogYW55ID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZURlZnM6IFtxdWVyaWVzLCBHYW1lLnR5cGVEZWYsIFRlYW0udHlwZURlZiwgVXNlci50eXBlRGVmXSxcbiAgcmVzb2x2ZXJzOiBtZXJnZShyZXNvbHZlcnMsIEdhbWUucmVzb2x2ZXJzLCBUZWFtLnJlc29sdmVycywgVXNlci5yZXNvbHZlcnMpLFxufTtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi8uLi9yZXNvbHZlcnMvZ2FtZVwiO1xuaW1wb3J0IFRlYW0gZnJvbSBcIi4uLy4uL3Jlc29sdmVycy90ZWFtXCI7XG5cbmNvbnN0IHR5cGVEZWYgPSBncWxgXG4gIHR5cGUgR2FtZSB7XG4gICAgaWQ6IElEIVxuICAgIGRhdGU6IFN0cmluZyFcbiAgICBob21lOiBUZWFtIVxuICAgIGF3YXk6IFRlYW0hXG4gICAgc2Vhc29uOiBJbnQhXG4gICAgaG9tZVNjb3JlOiBJbnQhXG4gICAgYXdheVNjb3JlOiBJbnQhXG4gICAgd2lubmVyOiBUZWFtIVxuICAgIGhpZ2hsaWdodHM6IFN0cmluZyFcbiAgfVxuXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5IHtcbiAgICBnYW1lKGlkOiBJRCA9IFwiXCIpOiBHYW1lXG4gIH1cbmBcblxuY29uc3QgcmVzb2x2ZXJzID0ge1xuICBRdWVyeToge1xuICAgIGdhbWU6IEdhbWUucmV0cmlldmUsXG4gIH0sXG4gIEdhbWU6IHtcbiAgICBob21lOiBnYW1lID0+IFRlYW0ucmV0cmlldmUoZ2FtZSwgeyBpZDogZ2FtZS5ob21lLCBuYW1lOiBcIlwiLCBhYmJyZXY6IFwiXCIgfSksXG4gICAgYXdheTogZ2FtZSA9PiBUZWFtLnJldHJpZXZlKGdhbWUsIHsgaWQ6IGdhbWUuYXdheSwgbmFtZTogXCJcIiwgYWJicmV2OiBcIlwiIH0pLFxuICAgIHdpbm5lcjogZ2FtZSA9PiBUZWFtLnJldHJpZXZlKGdhbWUsIHsgaWQ6IGdhbWUud2lubmVyLCBuYW1lOiBcIlwiLCBhYmJyZXY6IFwiXCIgfSksXG4gICAgaGlnaGxpZ2h0czogZ2FtZSA9PiBHYW1lLmhpZ2hsaWdodHMucmV0cmlldmUoZ2FtZSksXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGVEZWYsXG4gIHJlc29sdmVycyxcbn07XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IFRlYW0gZnJvbSBcIi4vdGVhbVwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vdXNlclwiO1xuXG5leHBvcnQge1xuICBHYW1lLFxuICBUZWFtLFxuICBVc2VyLFxufTtcbiIsImltcG9ydCBUZWFtIGZyb20gJy4vdGVhbSc7XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW07XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCI7XG5pbXBvcnQgVGVhbSBmcm9tIFwiLi4vLi4vcmVzb2x2ZXJzL3RlYW1cIjtcblxuY29uc3QgdHlwZURlZiA9IGdxbGBcbiAgdHlwZSBUZWFtIHtcbiAgICBpZDogSUQhXG4gICAgbmFtZTogU3RyaW5nIVxuICAgIGZ1bGxOYW1lOiBTdHJpbmchXG4gICAgYWJicmV2OiBTdHJpbmchXG4gICAgY29uZmVyZW5jZTogU3RyaW5nIVxuICAgIGRpdmlzaW9uOiBTdHJpbmchXG4gICAgd2luczogSW50IVxuICAgIGxvc3NlczogSW50IVxuICB9XG5cbiAgdHlwZSBUZWFtTGlzdCB7XG4gICAgaXRlbXM6IFtUZWFtXSFcbiAgfVxuXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5IHtcbiAgICB0ZWFtKGlkOiBJRCA9IFwiXCIsIG5hbWU6IFN0cmluZyA9IFwiXCIsIGFiYnJldjogU3RyaW5nID0gXCJcIik6IFRlYW1cbiAgICB0ZWFtczogVGVhbUxpc3RcbiAgfVxuXG5gXG5cbmNvbnN0IHJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICB0ZWFtOiBUZWFtLnJldHJpZXZlLFxuICAgIHRlYW1zOiBUZWFtLnNlYXJjaCxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZURlZixcbiAgcmVzb2x2ZXJzLFxufTtcbiIsImltcG9ydCBVc2VyIGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vcmVzb2x2ZXJzL3VzZXJcIjtcblxuY29uc3QgdHlwZURlZiA9IGdxbGBcbiAgdHlwZSBVc2VyIHtcbiAgICBpZDogSUQhXG4gICAgbmFtZTogU3RyaW5nIVxuICAgIGVtYWlsOiBTdHJpbmchXG4gICAgdGVhbXM6IFtTdHJpbmddXG4gIH1cblxuICBleHRlbmQgdHlwZSBRdWVyeSB7XG4gICAgdXNlcihpZDogSUQhKTogVXNlclxuICB9XG5gXG5cbmNvbnN0IHJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICB1c2VyOiBVc2VyLnJldHJpZXZlLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlRGVmLFxuICByZXNvbHZlcnMsXG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldEN1cnJTZWFzb25ZZWFyID0gKCkgPT4ge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHNlYXNvblN0YXJ0ID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgOSk7XG4gIC8vIElmIHRoZSBjdXJyZW50IG1vbnRoIGlzIGJlZm9yZSAgb2N0b2JlciwgdGhlbiB1c2UgdGhlIHByaW9yIHllYXJcbiAgaWYgKHRvZGF5IDwgc2Vhc29uU3RhcnQpIHtcbiAgICByZXR1cm4gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIDE7XG4gIH1cbiAgcmV0dXJuIHRvZGF5LmdldEZ1bGxZZWFyKCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNUb2RheSA9IChkYXRlOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgbGFzdFVwZGF0ZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICByZXR1cm4gbGFzdFVwZGF0ZURhdGUuZ2V0RGF0ZSgpID09PSB0b2RheS5nZXREYXRlKClcbiAgICAmJiBsYXN0VXBkYXRlRGF0ZS5nZXRNb250aCgpID09PSB0b2RheS5nZXRNb250aCgpXG4gICAgJiYgbGFzdFVwZGF0ZURhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb252RGF0ZVN0cmluZyA9IChkYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZGF0ZS5yZXBsYWNlKC9bVFpdL2csIFwiIFwiKS5zbGljZSgwLC01KTtcbn07XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCBEYXRhYmFzZSBmcm9tIFwiYmV0dGVyLXNxbGl0ZTNcIjtcbmltcG9ydCB7IEFwb2xsb1NlcnZlciwgZ3FsIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBzY2hlbWEgZnJvbSBcIi4vbW9kdWxlc1wiO1xuXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgdHlwZURlZnM6IHNjaGVtYS50eXBlRGVmcyxcbiAgcmVzb2x2ZXJzOiBzY2hlbWEucmVzb2x2ZXJzLFxufSk7XG5cbmNvbnN0IGRiUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi4vZGJcIiwgXCJob29wLXdhdGNoZXIuZGJcIik7XG5jb25zdCBkYiA9IG5ldyBEYXRhYmFzZShkYlBhdGgsIHsgdmVyYm9zZTogY29uc29sZS5sb2cgfSk7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmZ1bmN0aW9uIHNldFBvcnQocG9ydCA9IDQwMDApIHtcbiAgYXBwLnNldCgncG9ydCcsIHBvcnQpO1xuIH1cbnNlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAgfSk7XG5cbmZ1bmN0aW9uIGxpc3RlbigpIHtcbiAgYXBwLmxpc3Rlbih7IHBvcnQ6IDQwMDAgfSwgKCkgPT5cbiAgICBjb25zb2xlLmxvZyhg8J+agCBTZXJ2ZXIgcmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDo0MDAwJHtzZXJ2ZXIuZ3JhcGhxbFBhdGh9YClcbiAgKTtcbn1cblxuYXBwLnVzZShjb3JzKHtcbiAgb3JpZ2luOiAnKicsIC8vIEJlIHN1cmUgdG8gc3dpdGNoIHRvIHlvdXIgcHJvZHVjdGlvbiBkb21haW5cbiAgb3B0aW9uc1N1Y2Nlc3NTdGF0dXM6IDIwMFxufSkpO1xuXG5hcHAuZ2V0KCcvYXBpL3N0YXR1cycsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7IHN0YXR1czogJ29rJyB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEFwcDogKCkgPT4gYXBwLFxuICBnZXRTZXJ2ZXI6ICgpID0+IHNlcnZlcixcbiAgZ2V0RGI6ICgpID0+IGRiLFxuICBzZXRQb3J0LFxuICBsaXN0ZW4sXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJldHRlci1zcWxpdGUzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=