-- SQLite
CREATE TABLE IF NOT EXISTS teams(
    id          INT         PRIMARY KEY NOT NULL, 
    name        TEXT        NOT NULL UNIQUE, 
    full_name   TEXT        NOT NULL UNIQUE,
    abbrev      TEXT        NOT NULL UNIQUE,
    conference  TEXT        NOT NULL, 
    division    TEXT        NOT NULL,
    wins        INT         DEFAULT 0,
    losses      INT         DEFAULT 0,
    updated_at  TIMESTAMP   DEFAULT CURRENT_TIMESTAMP 
);
