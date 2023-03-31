DROP TABLE IF EXISTS customitems;

CREATE TABLE  customitems (
    id SERIAL PRIMARY KEY,
    name TEXT,
    type VARCHAR(50),
    rarity VARCHAR(50),
    attunement BOOLEAN,
    description TEXT
);


INSERT INTO customitems (name, type, rarity, attunement, description) VALUES ('Excalibur', 'Sword (any)', 'Legendary', true, 'Can only be attuned by a Paladin character. Excalibur is the legendary sword wielded by King Arthur. This sword has a +3 bonus to hit and damage rolls and does an additional 2d10 radiant damage on hit. Three times per day, a character attuned to Excalibur can use it to case True Sight, extending the range out to 120 feet. Charges are reset daily at dawn.');