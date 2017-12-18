

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

001: A heart transplant is the surgical transplant procedure performed on patients with end-stage heart failure or severe coronary artery disease. 

Includes all heart transplant procedures and implantation of ventricular assist devices with major complications and comorbidities

Heart Transplant or implanting a ventricular assist device with Major Complications or Comorbidities

004: Includes all tracheostomy procedures with mechanical ventilation that is performed for over 4 days without a major operating room procedure, or a principal diagnosis, excluding face, mouth, and neck disorders, without a major operating room procedure. 

Tracheostomy with Mechanical Ventilation for 96+ Hours or Principal Diagnosis Except Face, Mouth and Neck Disorders without Major O.R. Procedure

236: Includes all coronary bypass procedures without the need of a heart catheter and without any major complications. 

Coronary Bypass without Cardiac Catheterization without major complications

419: Includes all laparoscopic cholecystectomy procedures without common duct exploration and with out complications and comorbidities.

Laparoscopic Cholecystectomy without common duct exploration without complications and Comorbidities 
460: Includes all spinal fusions, not including cervical, and generally does not involve large deformity corrections, tumors, or major fracture repair.

spine fusion, not including cervical, and is characteristically the basic code utilized
for spinal fusion for our patient base that does not involve large deformity corrections, tumors or
major fracture repair
470: Includes all hip and knee replacement procedures without major complications, as well as any reattachment of the leg, ankle or foot without major complications.

Hip and knee replacements 

