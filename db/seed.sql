

//used mysql workbench import wizard to import the filtered csv file then did the following: 


USE medical_cost_db;

CREATE TABLE provider_info(
provider_id INT NOT NULL,
provider_name VARCHAR(70) NOT NULL,
street_address VARCHAR(95) NOT NULL,
city VARCHAR(35) NOT NULL,
state VARCHAR(2) NOT NULL,
zip_code INT NOT NULL,
region VARCHAR(70) NOT NULL,
PRIMARY KEY (provider_id)
);


CREATE TABLE procedure_name(
procedure_id INT NOT NULL,
drg_definition VARCHAR(95) NOT NULL,
procedure_name VARCHAR(70) NOT NULL,
PRIMARY KEY(procedure_id)
);

CREATE TABLE cost_data(
provider_id INT NOT NULL,
procedure_id INT NOT NULL,
patient_payments DECIMAL(19,4) NOT NULL,
FOREIGN KEY (provider_id) REFERENCES provider_info(provider_id),
FOREIGN KEY (procedure_id) REFERENCES procedure_name(procedure_id),
PRIMARY KEY (provider_id, procedure_id)
);

///////////////////////////////////////////////////////////////////////////////////////////////////
//the below schema is for building additional relational tables to normalize the original dataset/ 
/////////////////////////////////////////////////////////////////////////////////////////////////


//// build provider_name table from medicare_data table ignoring duplicates ////
//// provider_id to act as primary key ////

    INSERT IGNORE INTO medical_cost_db.provider_info (
        provider_id, provider_name, street_address, city, state, zip_code, region
    )
    SELECT provider_id, provider_name, street_address, city, state, zip_code, region
    FROM medical_cost_db.medicare_data;




//// build procedure_name table from medicare_data ignoring duplicates
//// procedure_id to act as primary key 

    INSERT IGNORE INTO medical_cost_db.procedure_name (
        procedure_id, drg_definition, procedure_name
    )
    SELECT procedure_id, drg_definition, procedure_name 
    FROM medical_cost_db.medicare_data;


//// build cost_data table from medicare_data table
//// no duplicates to ignore
//// each provider_id and procedure_id pair are unique and together act as the primary key for this table
//// provider_id and procedure_id each act as foreign keys

    INSERT INTO medical_cost_db.cost_data(
        provider_id, procedure_id, patient_payments
    )
    SELECT 	provider_id, procedure_id, patient_payments
    FROM medical_cost_db.medicare_data;





