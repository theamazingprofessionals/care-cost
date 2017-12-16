

// used mysql workbench import wizard to import the filtered csv file then did the following: 


// set force to true
// run server.js and sequelize will build the tables (foreign keys for cost_data will be inserted by association)
//set force to false
//use scripts below to populate the database useing the medicare_data table



INSERT IGNORE INTO medical_cost_db.provider_Info (
	providerId, providerName, address, city, state, zipCode, region
)
SELECT provider_id, provider_name, address, city, state, zip_code, region
FROM medical_cost_db.medicare_data;



INSERT IGNORE INTO medical_cost_db.procedure_Name (
	drgDefinition, procedureId, procedureName
)
SELECT drg_definition, procedure_id, procedure_name 
FROM medical_cost_db.medicare_data;


INSERT INTO medical_cost_db.cost_Data(
    patientPayments, ProviderProviderId, ProcedureProcedureId, hospitalCharges, medicarePayments, totalPayments
)
SELECT patient_oop_payments, provider_id, procedure_id, average_covered_charges, average_medicare_payments, average_totalPayments
FROM medical_cost_db.medicare_data;


INSERT INTO medical_cost_db.cost_Data(
	patientPayments, ProviderProviderId, ProcedureProcedureId, hospitalCharges, medicarePayments, totalPayments
)
SELECT patient_payments, provider_id, procedure_id, average_covered_charges, average_medicare_payments, average_total_payments
FROM medical_cost_db.medicare_data;

CREATE TABLE medical_cost_db.patient_data
(
	patientId INT NOT NULL AUTO_INCREMENT, 
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL, 
	healthScore INT NOT NULL, 
	zipCode INT NOT NULL,
	PRIMARY KEY (patientId)
);

INSERT INTO patient_data (name, email, healthScore, zipCode) VALUES ("Jim Jones", "Jim.Jones@nowhere.com", 3, 60611);
INSERT INTO patient_data (name, email, healthScore, zipCode) VALUES ("Jessica Jones", "Jessica.Jones@nowhere.com", 1, 60611);
INSERT INTO patient_data (name, email, healthScore, zipCode) VALUES ("Luke Cage", "lukeisthebest@nowhere.com", 1, 60611);
INSERT INTO patient_data (name, email, healthScore, zipCode) VALUES ("Matt Smith", "sirmatty@nowhere.com", 4, 60611);
INSERT INTO patient_data (name, email, healthScore, zipCode) VALUES ("Johnny Appleseed", "JohnnymyBoy@nowhere.com", 5, 60611);
INSERT INTO patient_data (name, email, healthScore, zipCode) VALUES ("Dig Doug", "wananaDoug@nowhere.com", 3, 60611);

INSERT IGNORE INTO medical_cost_db_updated.provider_Info (
	providerId, providerName, address, city, state, zipCode, region
)
SELECT provider_id, provider_name, address, city, state, zip_code, region
FROM medical_cost_db_updated.medicare_data;



INSERT IGNORE INTO medical_cost_db_updated.procedure_Name (
	drgDefinition, procedureId, procedureName
)
SELECT drg, procedure_id, procedure_name 
FROM medical_cost_db_updated.medicare_data;


INSERT INTO medical_cost_db_updated.cost_Data(
    patientPayments, ProviderProviderId, ProcedureProcedureId, hospitalCharges, medicarePayments, totalPayments
)
SELECT patient_oop_payments, provider_id, procedure_id, average_covered_charges, average_medicare_payments, average_totalPayments
FROM medical_cost_db_updated.medicare_data;


