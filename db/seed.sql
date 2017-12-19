

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
SELECT drg, procedure_id, procedure_name 
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

CREATE TABLE patient_data
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

UPDATE procedure_Name SET procedureDescription = "Includes all heart transplant procedures and implantation of ventricular assist devices with major complications and comorbidities." WHERE procedureID = 1;

UPDATE procedure_Name SET procedureDescription = "Includes all tracheostomy procedures with mechanical ventilation that is performed for over 4 days without a major operating room procedure, or a principal diagnosis, excluding face, mouth, and neck disorders, without a major operating room procedure." WHERE procedureID = 4;

UPDATE procedure_Name SET procedureDescription = "Includes all coronary bypass procedures without the need of a heart catheter and without any major complications." WHERE procedureID = 236;

UPDATE procedure_Name SET procedureDescription = "Includes all laparoscopic cholecystectomy procedures without common duct exploration and with out complications and comorbidities." WHERE procedureID = 419;

UPDATE procedure_Name SET procedureDescription = "Includes all spinal fusions, not including cervical, and generally does not involve large deformity corrections, tumors, or major fracture repair." WHERE procedureID = 460;

UPDATE procedure_Name SET procedureDescription = "Includes all hip and knee replacement procedures without major complications, as well as any reattachment of the leg, ankle or foot without major complications." WHERE procedureID = 470;

//for jawsdb:

//mysql://xhyn6i1v63lp0x71:voxzfc0seei74ntx@ko86t9azcob3a2f9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/jf225m0y54ejg866

//mysql -h dyud5fa2qycz1o3v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	 -u t2igeqq5umlz86cu -pxa3v69sohv3t2duv ty85u50i6apx0b70 < medical_cost_db_updated_medicare_data.sql

INSERT IGNORE INTO ty85u50i6apx0b70.provider_Info (
	providerId, providerName, address, city, state, zipCode, region
)
SELECT provider_id, provider_name, address, city, state, zip_code, region
FROM ty85u50i6apx0b70.medicare_data;


INSERT IGNORE INTO ty85u50i6apx0b70.procedure_Name (
	drgDefinition, procedureId, procedureName
)
SELECT drg, procedure_id, procedure_name 
FROM ty85u50i6apx0b70.medicare_data;


INSERT INTO ty85u50i6apx0b70.cost_Data(
    patientPayments, ProviderProviderId, ProcedureProcedureId, hospitalCharges, medicarePayments, totalPayments
)
SELECT patient_oop_payments, provider_id, procedure_id, average_covered_charges, average_medicare_payments, average_totalPayments
FROM ty85u50i6apx0b70.medicare_data;

USE ty85u50i6apx0b70;

CREATE TABLE patient_data
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
