

CREATE TABLE NodeJS.comments
(
    id INT NOT NULL,
    commenter INT NOT NULL,
    comment INT NOT NULL,
    create_at DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY(id),
    INDEX commenter_idx (comment ASC),
    CONSTRAINT commenter
    FOREIGN KEY (commenter)
    REFERENCES nodejs.users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)

