-- SQLite
CREATE TABLE IF NOT EXISTS teams(
    id          INT         PRIMARY KEY NOT NULL,
    name        TEXT        NOT NULL UNIQUE,
    full_name   TEXT        NOT NULL UNIQUE,
    abbrev      TEXT        NOT NULL UNIQUE,
    conference  TEXT        NOT NULL,
    division    TEXT        NOT NULL,
    logo        TEXT        NOT NULL UNIQUE,
    wins        INT         DEFAULT 0,
    losses      INT         DEFAULT 0,
    updated_at  TIMESTAMP   DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS games(
    id              INT         PRIMARY KEY NOT NULL,
    date            TEXT        NOT NULL,
    home            INT         NOT NULL,
    away            INT         NOT NULL,
    season          INT         NOT NULL,
    home_score      INT         NOT NULL,
    away_score      INT         NOT NULL,
    winner          INT         NOT NULL,
    updated_at      TIMESTAMP   DEFAULT CURRENT_TIMESTAMP,
    highlights      TEXT,
    FOREIGN KEY(home)       REFERENCES teams(id),
    FOREIGN KEY(away)       REFERENCES teams(id),
    FOREIGN KEY(winner)       REFERENCES teams(id)
);
