export const questions = [
  {
    id: 1,
    type: "mcq",
    question: "A nurse is caring for a patient with hypertension. Which is the priority intervention?",
    options: [
      "Administer prescribed antihypertensives",
      "Encourage fluid intake",
      "Monitor blood glucose",
      "Provide emotional support"
    ],
    answer: [0],
    rationale: "Hypertension carries an immediate risk of target organ damage (e.g., stroke, myocardial infarction, renal failure). Administering prescribed antihypertensives directly targets the pathophysiology by reducing systemic vascular resistance and cardiac workload. While emotional support and physiological monitoring are components of holistic care, stabilizing hemodynamic parameters takes precedence using the ABC (Airway, Breathing, Circulation) framework."
  },
  {
    id: 2,
    type: "sata",
    question: "Which interventions are appropriate for a patient with fever? (Select all that apply)",
    options: [
      "Administer antipyretics",
      "Encourage fluids",
      "Apply ice directly to skin",
      "Monitor temperature regularly"
    ],
    answer: [0, 1, 3],
    rationale: "Fever increases the metabolic rate, insensible fluid loss, and oxygen consumption. Antipyretics reset the hypothalamic thermostat to a lower level. Encouraging fluids prevents dehydration from diaphoresis and hyperventilation. Regular monitoring ensures intervention efficacy and catches malignant spikes early. Direct ice application is contraindicated because it induces intense vasoconstriction and shivering, which paradoxically raises core body temperature and risks localized tissue injury."
  },
  {
    id: 3,
    type: "mcq",
    question: "The nurse is reviewing morning laboratory results for a patient receiving digoxen and furosemide. Which result requires immediate intervention?",
    options: [
      "Sodium 138 mEq/L (138 mmol/L)",
      "Potassium 3.2 mEq/L (3.2 mmol/L)",
      "Creatinine 1.1 mg/dL (97.2 µmol/L)",
      "Digoxin level 1.2 ng/mL (1.5 nmol/L)"
    ],
    answer: [1],
    rationale: "Furosemide is a loop diuretic that causes potassium wasting. The patient's potassium level is critically low (hypokalemia, normal: 3.5–5.0 mEq/L). Hypokalemia sensitizes the myocardium to digoxin, severely increasing the risk of life-threatening digoxin toxicity and cardiac dysrhythmias (such as PVCs or AV blocks), even when the digoxin level itself is within the therapeutic range (0.5–2.0 ng/mL). Sodium and creatinine levels are within normal parameters."
  },
  {
    id: 4,
    type: "sata",
    question: "A nurse is assessing a client admitted with suspected deep vein thrombosis (DVT) of the right lower extremity. Which clinical manifestations should the nurse expect to find? (Select all that apply)",
    options: [
      "Unilateral edema of the affected limb",
      "Warmth and erythema over the calf area",
      "Diminished dorsalis pedis pulses in the right foot",
      "Tenderness or cramping pain upon palpation",
      "Pale, cool, and shiny skin on the right leg"
    ],
    answer: [0, 1, 3],
    rationale: "DVT is a venous thromboembolic obstruction. Localized inflammatory processes result in unilateral edema, warmth, erythema, and deep muscle tenderness or aching pain. Diminished pulses, coolness, pallor, and shiny skin are characteristic findings of acute *arterial* insufficiency or peripheral artery disease (PAD), not venous thrombosis, where arterial inflow remains unimpeded."
  },
  {
    id: 5,
    type: "mcq",
    question: "The charge nurse on a medical-surgical unit is making assignments. Which client is most appropriate to assign to a Licensed Practical Nurse/Vocational Nurse (LPN/VN)?",
    options: [
      "A client with a newly established colostomy who requires extensive discharge teaching.",
      "A client admitted 4 hours ago presenting with acute pancreatitis and a pain rating of 9/10.",
      "A client with chronic obstructive pulmonary disease (COPD) scheduled for discharge tomorrow who requires routine scheduled nebulizer treatments.",
      "A client who underwent a thyroidectomy yesterday and is experiencing muscle twitching and tingling around the mouth."
    ],
    answer: [2],
    rationale: "LPN/VN scope of practice focuses on stable clients with predictable outcomes. The client with COPD is stable, near discharge, and receiving routine, predictable respiratory therapy. Initial assessment, complex discharge education (colostomy client), and evaluation of unstable or deteriorating clients (the pancreatitis client with severe pain, and the thyroidectomy client showing signs of hypocalcemia/tetany) require the advanced critical thinking and physical assessment skills exclusive to the Registered Nurse (RN)."
  },
  {
    id: 6,
    type: "mcq",
    question: "A nurse is caring for a client with Type 1 Diabetes Mellitus who is alert but experiencing tremors, diaphoresis, and tachycardia. A bedside capillary blood glucose reading is 52 mg/dL (2.9 mmol/L). Which action should the nurse take first?",
    options: [
      "Administer 15–20 grams of fast-acting simple carbohydrates orally.",
      "Inject 1 mg of glucagon subcutaneously.",
      "Administer 50 mL of 50% Dextrose (D50) intravenously.",
      "Notify the primary healthcare provider immediately."
    ],
    answer: [0],
    rationale: "The client is demonstrating symptomatic hypoglycemia. According to the 'Rule of 15', because the client is conscious, alert, and able to swallow safely, the immediate priority is the oral administration of 15–20 grams of fast-acting simple carbohydrates (e.g., 4 oz of fruit juice or regular soda). Intravenous D50 or subcutaneous glucagon are reserved for unconscious, confused, or NPO patients who cannot safely ingest oral options. Notification of the provider occurs after treating the acute episode."
  },
  {
    id: 7,
    type: "mcq",
    question: "The nurse receives report on four clients. Which client should the nurse assess first?",
    options: [
      "A client with deep vein thrombosis (DVT) who is reporting sudden-onset shortness of breath and pleuritic chest pain.",
      "A client with chronic obstructive pulmonary disease (COPD) whose oxygen saturation is 89% on 2L of oxygen via nasal cannula.",
      "A client who underwent an appendectomy 6 hours ago and reports a pain level of 8/10.",
      "A client with diabetes mellitus whose fasting blood glucose level is 140 mg/dL (7.8 mmol/L)."
    ],
    answer: [0],
    rationale: "Using the Airway, Breathing, Circulation (ABC) priority framework, the client with a DVT presenting with sudden shortness of breath and chest pain is exhibiting classic signs of a Pulmonary Embolism (PE), a life-threatening medical emergency requiring immediate oxygenation and medical intervention. The COPD client’s oxygenation is within their expected target range (88-92%). The post-op client requires pain management, and the diabetic client requires glycemic management, but neither represents an immediate threat to life."
  },
  {
    id: 8,
    type: "sata",
    question: "A nurse is preparing to administer lithium carbonate to a client with bipolar disorder. Which clinical findings or laboratory values require the nurse to hold the medication and notify the healthcare provider? (Select all that apply)",
    options: [
      "Serum lithium level of 1.8 mEq/L (1.8 mmol/L)",
      "Report of fine hand tremors",
      "Serum sodium level of 130 mEq/L (130 mmol/L)",
      "Complaints of severe diarrhea, nausea, and vomiting",
      "Client reports a weight gain of 2 lbs over the past month"
    ],
    answer: [0, 2, 3],
    rationale: "The therapeutic range for lithium is 0.6–1.2 mEq/L; a level of 1.8 mEq/L indicates moderate to severe toxicity. Hyponatremia (sodium <135 mEq/L) decreases lithium excretion, directly driving up serum lithium levels and compounding toxicity risk. Severe gastrointestinal symptoms (diarrhea, vomiting) are early, definitive signs of acute lithium toxicity. Fine hand tremors and mild weight gain are common, expected side effects that do not warrant holding the drug, though coarse tremors would indicate toxicity."
  },
  {
    id: 9,
    type: "mcq",
    question: "A nurse in the emergency department is caring for a client with a history of heart failure who presents with severe orthopnea, a cough productive of pink, frothy sputum, and bilateral crackles throughout the lung fields. Which medication should the nurse anticipate administering first?",
    options: [
      "Metoprolol 5 mg IV push",
      "Furosemide 40 mg IV push",
      "Digoxin 0.25 mg IV push",
      "Spironolactone 25 mg orally"
    ],
    answer: [1],
    rationale: "The client is presenting with acute decompensated heart failure with pulmonary edema, evidenced by orthopnea and pink, frothy sputum. This is a volume overload crisis requiring immediate preload reduction. IV Furosemide, a potent loop diuretic, acts rapidly to promote diuresis and venodilation, pulling fluid out of the lungs. Beta-blockers like Metoprolol are contraindicated during acute decompensation because they decrease contractility. Oral agents act too slowly, and digoxin does not resolve acute fluid volume excess immediately."
  },
  {
    id: 10,
    type: "mcq",
    question: "The nurse is monitoring a client in active labor who is receiving an intravenous oxytocin infusion. The nurse notes a pattern of fetal heart rate decelerations that begin *after* the peak of the uterine contraction and return to baseline well after the contraction has ended. Which action should the nurse take first?",
    options: [
      "Increase the rate of the oxytocin infusion.",
      "Place the client in a supine position.",
      "Discontinue the oxytocin infusion.",
      "Administer oxygen at 2 L/min via nasal cannula."
    ],
    answer: [2],
    rationale: "The description indicates late decelerations, which are caused by uteroplacental insufficiency and signify fetal distress/hypoxia. The immediate priority action is to stop the oxytocin infusion to eliminate uterine hyperstimulation and improve blood flow to the placenta. Other corrective actions include repositioning the client to the left side (never supine, which causes vena cava compression) and administering oxygen at 8–10 L/min via a non-rebreather mask."
  },
  {
    id: 11,
    type: "sata",
    question: "A nurse is caring for a 4-year-old child diagnosed with acute glomerulonephritis. Which assessment findings should the nurse expect? (Select all that apply)",
    options: [
      "Periorbital and facial edema",
      "Gross, tea-colored or smoky urine",
      "Severe hypotension",
      "Mild to moderate hypertension",
      "Massive generalized proteinuria (>3.5g/day)"
    ],
    answer: [0, 1, 3],
    rationale: "Acute glomerulonephritis is an immune-complex disease following a streptococcal infection, leading to glomerular capillary inflammation. Expected signs include fluid retention presenting as periorbital/facial edema, hematuria resulting in tea-colored/smoky urine, and hypertension due to decreased glomerular filtration and fluid retention. Massive proteinuria (>3.5g/day) and severe hypotension are indicative of Nephrotic Syndrome, not glomerulonephritis."
  },
  {
    id: 12,
    type: "mcq",
    question: "A client with a history of alcohol use disorder is admitted to the medical unit. Twenty-four hours after admission, the client becomes increasingly agitated, tachycardic, and reports seeing 'bugs crawling all over the walls.' Which medication should the nurse expect the healthcare provider to prescribe?",
    options: [
      "Haloperidol",
      "Lorazepam",
      "Disulfiram",
      "Clonidine"
    ],
    answer: [1],
    rationale: "The client is demonstrating signs of severe alcohol withdrawal delirium (delirium tremens), characterized by autonomic hyperactivity (tachycardia) and tactile/visual hallucinations. Benzodiazepines like Lorazepam or Chlordiazepoxide are the gold-standard treatment because they provide cross-tolerance with alcohol, sedate the central nervous system, prevent seizures, and stabilize vital signs. Disulfiram is used for long-term sobriety maintenance, not acute withdrawal. Haloperidol can lower the seizure threshold and is avoided as a primary treatment."
  },
  {
    id: 13,
    type: "mcq",
    question: "The nurse is caring for a client with a chest tube attached to a wet suction water-seal drainage system. The nurse notes continuous, vigorous bubbling in the water-seal chamber. What is the correct interpretation of this finding?",
    options: [
      "This is an expected finding indicating that the lung has fully re-expanded.",
      "There is an air leak present somewhere within the drainage system or the client's chest.",
      "The wall suction unit is set to an excessively high pressure level.",
      "The chest tube is occluded or kinked and needs to be milked."
    ],
    answer: [1],
    rationale: "Continuous bubbling in the *water-seal* chamber indicates an air leak between the client's pleural space and the drainage system. The nurse must systematically check the system connections and the insertion site to locate the leak. Intermittent bubbling is expected during coughing or exhalation in a client with a pneumothorax. Continuous bubbling in the *suction control* chamber (not the water-seal chamber) is an expected finding if wet suction is being utilized."
  },
  {
    id: 14,
    type: "sata",
    question: "The nurse is providing discharge teaching to a client newly prescribed warfarin. Which instructions should the nurse include? (Select all that apply)",
    options: [
      "Maintain a consistent intake of green, leafy vegetables.",
      "Take aspirin or ibuprofen for mild headaches or body aches.",
      "Use a soft-bristled toothbrush and an electric razor.",
      "Obtain regular blood draws to monitor International Normalized Ratio (INR) levels.",
      "If a dose is missed, double the next day's dose to keep blood levels therapeutic."
    ],
    answer: [0, 2, 3],
    rationale: "Clients taking warfarin must maintain a consistent intake of Vitamin K (found in green, leafy vegetables) because sudden increases can decrease warfarin's efficacy, while sudden drops increase bleeding risks. Soft-bristled toothbrushes and electric razors reduce the risk of bleeding. Regular INR monitoring is essential to titrate the dosage safely. Aspirin and NSAIDs (ibuprofen) enhance antiplatelet effects and dramatically increase bleeding risks; acetaminophen is typically preferred. Clients must never double up on missed doses."
  },
  {
    id: 15,
    type: "mcq",
    question: "A client with a closed head injury has a urine output of 500 mL/hour for two consecutive hours. The nurse notes the client's blood pressure is 98/54 mmHg, and serum sodium is 152 mEq/L (152 mmol/L). Which condition should the nurse suspect?",
    options: [
      "Syndrome of Inappropriate Antidiuretic Hormone (SIADH)",
      "Diabetes Insipidus (DI)",
      "Acute Kidney Injury (AKI)",
      "Diabetic Ketoacidosis (DKA)"
    ],
    answer: [1],
    rationale: "Traumatic brain injuries can disrupt the posterior pituitary gland, halting the synthesis or release of Antidiuretic Hormone (ADH) and causing Diabetes Insipidus. Without ADH, the renal tubules cannot reabsorb water, leading to massive polyuria (>250 mL/hr), profound dehydration, hypotension, and severe hypernatremia (sodium >145 mEq/L) due to hemoconcentration. SIADH presents with the exact opposite symptoms: fluid retention, oliguria, and hyponatremia."
  },
  {
    id: 16,
    type: "mcq",
    question: "The nurse is assessing a client who is 2 hours post-op thyroidectomy. The nurse notes that the client's voice has become increasingly hoarse, and audible stridor is present on inspiration. Which action should the nurse take immediately?",
    options: [
      "Reassure the client that temporary hoarseness is common following endotracheal intubation.",
      "Administer an oral analgesic for surgical site pain.",
      "Prepare for emergency tracheostomy and call the rapid response team.",
      "Encourage the client to perform deep coughing and deep breathing exercises."
    ],
    answer: [2],
    rationale: "Following a thyroidectomy, swelling or a hematoma in the neck can cause compression of the trachea. The presentation of inspiratory stridor indicates an acute, critical upper airway obstruction. The nurse must call the rapid response team and prepare emergency airway equipment (tracheostomy tray) at the bedside. Coughing exercises could worsen bleeding or swelling at the surgical site."
  },
  {
    id: 17,
    type: "sata",
    question: "A nurse is caring for a client with a suspected diagnosis of meningococcal meningitis. Which isolation and infection control measures are required? (Select all that apply)",
    options: [
      "Place the client in a private room.",
      "Wear an N95 respirator mask when entering the room.",
      "Wear a standard surgical mask when working within 3 feet of the client.",
      "Keep the room door closed at all times.",
      "Maintain droplet precautions for 24 hours after the initiation of effective antibiotic therapy."
    ],
    answer: [0, 2, 4],
    rationale: "*Neisseria meningitidis* is transmitted via large respiratory droplets, requiring droplet precautions. This includes a private room and a standard surgical mask when within 3 feet of the client. Droplet precautions can be discontinued 24 hours after effective antibiotic therapy has begun. N95 respirators and negative pressure rooms (keeping the door closed at all times) are reserved for *airborne* transmission diseases like tuberculosis, measles, or varicella."
  },
  {
    id: 18,
    type: "mcq",
    question: "A client diagnosed with chronic peripheral artery disease (PAD) reports severe, aching pain in the lower extremities that worsens when legs are elevated in bed. Which intervention should the nurse recommend?",
    options: [
      "Apply an ice pack wrapped in a cloth to the calves for 20 minutes.",
      "Dangle the legs over the side of the bed.",
      "Elevate the lower extremities above the level of the heart using pillows.",
      "Perform vigorous lower-extremity stretching exercises before sleep."
    ],
    answer: [1],
    rationale: "In peripheral artery disease, blood flow to the lower extremities is impaired. Elevating the legs cuts down arterial perfusion further, bringing on ischemia and causing 'rest pain.' Dangling the legs over the side of the bed uses gravity to enhance arterial blood flow to the feet, relieving the ischemic pain. Ice packs cause vasoconstriction and worsen ischemia, while elevation is a treatment suited for *venous* insufficiency, not arterial."
  },
  {
    id: 19,
    type: "mcq",
    question: "The nurse is reviewing the lab results of a client with a history of cirrhosis who presents with worsening hepatic encephalopathy. Which laboratory result is directly correlated with the client's altered mental status?",
    options: [
      "Serum Bilirubin 4.2 mg/dL (71.8 µmol/L)",
      "Blood Urea Nitrogen (BUN) 32 mg/dL (11.4 mmol/L)",
      "Serum Ammonia 120 µg/dL (70.5 µmol/L)",
      "Alanine Aminotransferase (ALT) 150 U/L"
    ],
    answer: [2],
    rationale: "Hepatic encephalopathy is a neuropsychiatric complication of advanced liver disease caused by the liver's inability to convert neurotoxic ammonia into urea. Elevated serum ammonia levels readily cross the blood-brain barrier, causing cerebral edema and altered mental status ranging from confusion (asterixis) to coma. Bilirubin and ALT indicate liver dysfunction/injury but do not directly drive the neurobehavioral changes."
  },
  {
    id: 20,
    type: "sata",
    question: "A nurse is caring for an infant diagnosed with Tetralogy of Fallot. During a diaper change, the infant begins crying intensely, turns cyanotic, and exhibits dyspnea. Which immediate actions should the nurse perform? (Select all that apply)",
    options: [
      "Place the infant in a knee-chest position.",
      "Administer 100% oxygen via blow-by or face mask.",
      "Encourage the infant to continue crying to expand the alveoli.",
      "Administer prescribed IV morphine sulfate if available.",
      "Place the infant in a flat, supine position."
    ],
    answer: [0, 1, 3],
    rationale: "The infant is experiencing a hypercyanotic spell ('tet spell'). The knee-chest position increases systemic vascular resistance, forcing more blood from the right ventricle into the pulmonary artery rather than out through the overriding aorta. Oxygen administration improves tissue oxygenation, and morphine reduces infundibular spasms and calms the infant, reducing oxygen demand. Crying increases intra-thoracic pressure and shunting, worsening the spell; flat supine positioning is contraindicated."
  },
  {
    id: 21,
    type: "mcq",
    question: "The nurse is preparing to administer intravenous vancomycin to a client. Which nursing action is essential to prevent the occurrence of 'Red Man Syndrome' (vancomycin infusion reaction)?",
    options: [
      "Protect the intravenous infusion bag from direct sunlight.",
      "Administer the medication via a rapid intravenous push over 2 to 3 minutes.",
      "Infuse the medication slowly over at least 60 minutes via an infusion pump.",
      "Pre-medicate the client with an oral dose of acetaminophen 30 minutes before the infusion."
    ],
    answer: [2],
    rationale: "Red Man Syndrome is a rate-dependent infusion reaction caused by the rapid, non-immune release of histamine, resulting in flushing, pruritus, and hypotension. It is prevented by infusing vancomycin slowly over a minimum of 60 minutes (or up to 2 hours for higher doses like 1.5–2g). Rapid IV pushes are dangerous and contraindicated for vancomycin. Antihistamines, not acetaminophen, help treat the reaction if it occurs, but slow infusion is the primary preventative mechanism."
  },
  {
    id: 22,
    type: "mcq",
    question: "A client with advanced heart failure is admitted to the medical-surgical unit. The client's spouse presents a copy of the client's advance directive, which states the client does not want mechanical ventilation. The client is currently alert, oriented, and experiencing acute respiratory distress. The client states, 'I changed my mind, please do whatever it takes to help me breathe.' Which action should the nurse take first?",
    options: [
      "Defer to the spouse's copy of the advance directive since it is a legal document.",
      "Notify the healthcare provider immediately to obtain an order for intubation based on the client's verbal statement.",
      "Inform the client that advance directives cannot be altered verbally once legally executed.",
      "Request an immediate consultation with the hospital ethics committee to resolve the conflict."
    ],
    answer: [1],
    rationale: "According to the NCSBN Test Plan for Management of Care and foundational nursing legal concepts outlined in Saunders Comprehensive Review, a competent client retains the right to autonomously make, change, or revoke decisions regarding their medical care at any time, including verbally overriding a previously executed advance directive. Because the client is currently alert and oriented, their explicit verbal consent takes precedence over the written document and the spouse's input. The nurse must immediately advocate for the client's current wishes by notifying the provider to secure the necessary interventions for respiratory support."
  },
  {
    id: 23,
    type: "mcq",
    question: "The Registered Nurse (RN) is planning care for a group of clients on a telemetry unit. Which task is most appropriate for the RN to delegate to an experienced Licensed Practical Nurse/Vocational Nurse (LPN/VN)?",
    options: [
      "Administering an initial dose of intravenous metoprolol to a client with new-onset atrial fibrillation.",
      "Completing the comprehensive admission physical assessment for a client transferred from the emergency department.",
      "Administering a scheduled subcutaneous dose of insulin glargine to a stable client with Type 2 Diabetes Mellitus.",
      "Developing a community-resource discharge teaching plan for a client recovering from a myocardial infarction."
    ],
    answer: [2],
    rationale: "In alignment with the NCSBN Delegation Guidelines and standard US nursing curricula (e.g., Ignatavicius and Lewis), the RN cannot delegate tasks involving the core steps of the nursing process that require advanced clinical judgment, such as initial clinical assessment, planning, or evaluating care. Administering an initial IV medication requires advanced monitoring for an unstable client. Developing a discharge teaching plan involves the 'Planning' and 'Implementation' phases of the nursing process, which cannot be delegated. Administering a scheduled, routine subcutaneous medication to a stable client falls squarely within the LPN/VN scope of practice."
  },
  {
    id: 24,
    type: "sata",
    question: "A nurse is assessing a client suspected of having Cushing's syndrome. Based on the clinical criteria standard in US nursing textbooks such as Lewis's Medical-Surgical Nursing, which clinical manifestations should the nurse expect to observe? (Select all that apply)",
    options: [
      "Truncal obesity with thin extremities",
      "Hyperpigmentation of the skin and mucous membranes",
      "Purple or striae across the abdomen and thighs",
      "Supraclavicular fat pad accumulation ('buffalo hump')",
      "Hypotension and profound hyperkalemia"
    ],
    answer: [0, 2, 3],
    rationale: "Cushing's syndrome results from a chronic excess of glucocorticoids (cortisol). Standard diagnostic criteria and clinical presentations outlined in US nursing textbooks detail that excess cortisol causes altered fat distribution—leading to truncal obesity, a 'buffalo hump,' and a round 'moon face'—accompanied by muscle wasting that results in thin extremities. Cortisol excess also impairs collagen production, making the skin fragile and leading to distinct purple/red abdominal striae and easy bruising. Hyperpigmentation is classic for primary adrenocortical insufficiency (Addison's disease) due to elevated ACTH, not Cushing's syndrome. Excess cortisol has mineralocorticoid-like activity, causing sodium/water retention (hypertension) and hypokalemia, making hypotension and hyperkalemia incorrect."
  },
  {
    id: 25,
    type: "ngn_case_study",
    question: "Review the client data below. Based on the client's current presentation, which 3 clinical interventions should the nurse anticipate executing immediately? (Select 3 choices. Scored via NGN +/- scoring rules)",
    tabs: [
      {
        title: "Nurses' Notes",
        content: "08:00 - Client is a 24-year-old female with a 3-year history of Crohn's disease, admitted with an acute exacerbation. Reports severe, cramping abdominal pain (8/10) located primarily in the right lower quadrant, accompanied by 10-12 episodes of liquid, non-bloody stool per day over the past week. Client appears fatigued, pale, and reports poor oral intake due to nausea and fear of worsening abdominal pain. Abdomen is distended; hyperactive bowel sounds noted in all quadrants. Marked tenderness to palpation in the right lower quadrant without rebound tenderness."
      },
      {
        title: "Vital Signs",
        content: "08:00\n- Temperature: 101.2°F (38.4°C)\n- Heart Rate: 112 bpm (sinus tachycardia)\n- Respiratory Rate: 20/min\n- Blood Pressure: 94/56 mmHg\n- Oxygen Saturation: 97% on room air"
      },
      {
        title: "Laboratory Results",
        content: "08:15\n- White Blood Cell (WBC) Count: 14,500/mm³ (Normal: 5,000-10,000/mm³)\n- Hemoglobin: 10.2 g/dL (Normal: 12.0-16.0 g/dL)\n- Potassium: 3.1 mEq/L (Normal: 3.5-5.0 mEq/L)\n- Erythrocyte Sedimentation Rate (ESR): 42 mm/hr (Normal: <20 mm/hr)"
      }
    ],
    options: [
      "Initiate an intravenous infusion of 0.9% Normal Saline with 20 mEq/L Potassium Chloride at 125 mL/hr.",
      "Administer a high-fiber, bulk-forming oral laxative to regulate bowel movements.",
      "Maintain strict Nothing by Mouth (NPO) status for bowel rest.",
      "Administer prescribed intravenous methylprednisolone.",
      "Prepare the client for an emergency surgical total colectomy."
    ],
    answer: [0, 2, 3],
    rationale: "Based on clinical standards from Ignatavicius Medical-Surgical Nursing, the client is experiencing a severe acute exacerbation of Crohn's disease characterized by frequent diarrhea, local inflammation (elevated WBC and ESR), fever, and significant fluid/electrolyte depletion (tachycardia, hypotension, and a low potassium level of 3.1 mEq/L). The top priorities are managing dehydration/hypokalemia, achieving bowel rest, and reducing acute inflammation. 1) Fluid resuscitation with potassium replacement directly addresses the hypotension and hypokalemia. 2) Strict NPO status promotes bowel rest, which reduces mechanical irritation and cramping. 3) IV Corticosteroids (methylprednisolone) are standard to suppress the systemic inflammatory response. High-fiber laxatives are strictly contraindicated as they will exacerbate cramping, diarrhea, and risk bowel perforation. Emergency total colectomy is a treatment for toxic megacolon or severe ulcerative colitis; Crohn's disease management relies on conservative medical interventions first because surgery is not curative."
  },
  {
    id: 26,
    type: "mcq",
    question: "The charge nurse on a pediatric unit is making client assignments for the shift. Which client should be assigned to an experienced floating nurse from the adult medical-surgical unit?",
    options: [
      "A 4-year-old child who underwent a tonsillectomy 4 hours ago and is exhibiting frequent swallowing.",
      "A 10-year-old child admitted in sickle cell crisis who requires intravenous hydration and PCA opioid management.",
      "An 18-month-old infant with respiratory syncytial virus (RSV) receiving ribavirin via a small-particle aerosol generator.",
      "A 7-year-old child with acute glomerulonephritis who has a blood pressure of 142/90 mmHg and gross hematuria."
    ],
    answer: [1],
    rationale: "In alignment with the NCSBN Test Plan for Management of Care and delegation principles, an adult medical-surgical nurse possesses highly transferable skills in managing continuous intravenous fluid resuscitation, operating Patient-Controlled Analgesia (PCA) pumps, and evaluating systemic pain crises. Option A requires specialized pediatric post-operative assessment for hemorrhage, where frequent swallowing indicates active bleeding from the surgical site. Option C requires specialized isolation protocols and pediatric respiratory equipment. Option D requires expert knowledge of pediatric hypertensive crises and renal management. Therefore, Option B represents the most stable and appropriate assignment for a floating adult-care nurse."
  },
  {
    id: 27,
    type: "mcq",
    question: "A nurse is providing discharge instructions to a postpartum client who is breastfeeding. Which statement by the client indicates a need for further teaching regarding mastitis?",
    options: [
      "I should wear a supportive, well-fitting bra without underwires.",
      "If I develop a sore, red area on my breast, I must stop breastfeeding immediately on that side.",
      "I need to ensure that my baby latches on to both the nipple and the entire areola.",
      "I will express milk or pump if my breasts feel excessively engorged after feeding."
    ],
    answer: [1],
    rationale: "According to maternal-newborn nursing standards outlined in Saunders Comprehensive Review, stopping breastfeeding abruptly on an affected breast is strictly contraindicated in mastitis. Sudden cessation accelerates milk stasis, which rapidly exacerbates the localized infectious process and increases the risk of breast abscess formation. The client should continue to breastfeed frequently, starting on the unaffected side to stimulate the let-down reflex, or utilize a mechanical pump to ensure the breast is completely emptied. Options A, C, and D are correct preventive and management strategies that maintain proper ductal patency, limit bacterial portal entry, and minimize structural engorgement."
  },
  {
    id: 28,
    type: "mcq",
    question: "An adult client with a history of chronic kidney disease is admitted to the medical-surgical unit. The laboratory results reveal a serum potassium level of 6.4 mEq/L (6.4 mmol/L) and an electrocardiogram (ECG) reveals peaked T waves. Which prescription should the nurse implement first?",
    options: [
      "Administer sodium polystyrene sulfonate 30 g orally.",
      "Administer intravenous calcium gluconate 10% over 5 to 10 minutes.",
      "Administer 10 units of regular insulin intravenously with 50 mL of 50% dextrose.",
      "Initiate a continuous infusion of nebulized albuterol."
    ],
    answer: [1],
    rationale: "Based on Lewis's Medical-Surgical Nursing, severe hyperkalemia ($>6.0\text{ mEq/L}$) with electrophysiologic changes like peaked T waves poses an immediate threat of lethal cardiac dysrhythmias, including ventricular fibrillation or asystole. Intravenous calcium gluconate does not alter serum potassium concentrations, but it immediately antagonizes potassium-induced cardiac toxicity by stabilizing the myocardial cell membrane. Regular insulin with dextrose (Option C) and nebulized albuterol (Option D) shift potassium into the intracellular space but have a delayed onset compared to calcium's immediate cardioprotective action. Sodium polystyrene sulfonate (Option A) eliminates potassium via the GI tract but takes hours to exert an effect."
  },
  {
    id: 29,
    type: "mcq",
    question: "The nurse is caring for a client admitted with Diabetic Ketoacidosis (DKA). The initial laboratory results show a blood glucose of 520 mg/dL, a serum potassium of 3.3 mEq/L, and an arterial pH of 7.15. The health care provider prescribes a continuous regular insulin infusion. Which action should the nurse take before starting the insulin infusion?",
    options: [
      "Administer an intravenous bolus of regular insulin at 0.1 units/kg.",
      "Insert an indwelling urinary catheter to monitor strict hourly outputs.",
      "Notify the provider regarding the serum potassium level and anticipate potassium replacement.",
      "Wait for the arterial blood gas (ABG) to be repeated to confirm worsening metabolic acidosis."
    ],
    answer: [2],
    rationale: "As detailed in standard US endocrine management, exogenous insulin acts as a biochemical key that drives glucose along with extracellular potassium into the intracellular space. When a client presenting with DKA already exhibits a low or borderline serum potassium level ($<3.3\text{--}3.5\text{ mEq/L}$), initiating an insulin infusion without concurrent potassium replacement will rapidly precipitate profound hypokalemia, risking lethal ventricular dysrhythmias. Correcting or guarding the potassium level takes physiological priority over driving down blood glucose. Options A and B are standard components of DKA protocols but must follow or occur alongside potassium stabilization. Option D delays critical, time-sensitive resuscitation."
  },
  {
    id: 30,
    type: "mcq",
    question: "A client who sustained a closed fractured tibia 12 hours ago has a fiberglass leg cast in place. The client reports a sudden, severe, aching pain in the affected extremity that has progressively worsened and is not relieved by the prescribed intravenous morphine. What is the nurse's priority action?",
    options: [
      "Elevate the affected leg above the level of the heart to promote venous return.",
      "Assess the pedal pulses, capillary refill, and temperature of the affected extremity.",
      "Administer an additional dose of the prescribed breakthrough analgesic.",
      "Apply a warm compress over the casted area to alleviate muscle spasms."
    ],
    answer: [1],
    rationale: "According to Ignatavicius Medical-Surgical Nursing, progressive, severe pain that is entirely disproportionate to the injury and unresponsive to narcotic analgesics is the classic early hallmark of Acute Compartment Syndrome. This represents an ischemic microvascular emergency. The nurse's immediate priority is to gather objective neurovascular data via the '6 Ps' (Pain, Pressure, Paresthesia, Pallor, Paralysis, Pulselessness) to substantiate clinical findings before calling the provider for an emergent fasciotomy. Elevating the limb above heart level (Option A) is strictly contraindicated because it reduces microcirculatory arterial perfusion pressure, worsening tissue ischemia. Options C and D delay diagnosis and compound cellular hypoxia."
  },
  {
    id: 31,
    type: "mcq",
    question: "A nurse is caring for a client with a T4 spinal cord injury who suddenly reports a severe, throbbing headache. The nurse notes that the client is bradycardic (HR 48 bpm), severely hypertensive (BP 185/102 mmHg), and flushing is observed across the neck and face. Which action should the nurse implement first?",
    options: [
      "Administer the prescribed PRN intravenous hydralazine.",
      "Palpate the suprapubic area to check for bladder distension.",
      "Elevate the head of the bed to a high-Fowler's position (90 degrees).",
      "Check the client's rectum for the presence of a fecal impaction."
    ],
    answer: [2],
    rationale: "The client is experiencing Autonomic Dysreflexia, a life-threatening neurological emergency common in spinal cord lesions at or above the T6 level. The absolute initial action is to elevate the client into a high-Fowler's position (Option C) and dangle the legs if possible. This mechanical repositioning utilizes gravity to pool blood in the lower extremities, inducing an orthostatic drop that helps mitigate dangerously elevated intracranial and systemic blood pressures. Once the client is upright to prevent hemorrhagic stroke, the nurse systematically assesses for noxious triggers below the level of the injury, beginning with bladder distension (Option B) and fecal impaction (Option D) before advancing to pharmacotherapy (Option A)."
  },
  {
    id: 32,
    type: "mcq",
    question: "A client diagnosed with a deep vein thrombosis (DVT) is receiving a continuous intravenous heparin infusion. The health care provider prescribes oral warfarin therapy to begin today. The client asks the nurse, 'Why do I need to take two blood thinners at the same time?' Which response by the nurse is correct?",
    options: [
      "Warfarin activates the heparin in your bloodstream, making it double-effective at dissolving the current clot.",
      "It takes several days for warfarin to reach therapeutic blood levels, so the heparin is continued to keep you protected until then.",
      "Combining the medications allows us to use a much smaller dose of each drug, minimizing the overall risk of bleeding.",
      "Heparin works on the arterial clotting system, while warfarin focuses on the venous clotting system."
    ],
    answer: [1],
    rationale: "This clinical standard represents 'bridging therapy,' as outlined in Lilley's Pharmacology. Warfarin functions by blocking the hepatic synthesis of vitamin K-dependent clotting factors, which carries an intrinsic pharmacokinetic lag time of 3 to 5 days before depleting existing circulating factors and reaching a stable therapeutic International Normalized Ratio (INR). Fast-acting continuous IV heparin is maintained concurrently during this window to provide immediate systemic anticoagulation and prevent clot propagation. Neither agent exhibits fibrinolytic properties to dissolve established clots; they limit thrombus extension. Concomitant administration temporarily heightens bleeding risks, making Option C structurally incorrect."
  },
  {
    id: 33,
    type: "mcq",
    question: "A nurse is preparing to administer the morning dose of digoxin 0.25 mg orally to an adult client with heart failure. Which clinical finding should prompt the nurse to hold the medication and immediately notify the primary health care provider?",
    options: [
      "Apical pulse rate of 64 beats per minute.",
      "Serum digoxin level of 1.2 ng/mL.",
      "Client reports experiencing flickering yellow-green halos around objects.",
      "Serum sodium level of 136 mEq/L."
    ],
    answer: [2],
    rationale: "Under the cardiovascular pharmacology guidelines in Lilley's text, visual disturbances—specifically blurred vision, diplopia, or changes in color perception such as yellow-green halos—are classic, specific indicators of digitalis toxicity. Other systemic signs include anorexia, nausea, and bradyarrhythmias. The serum digoxin level of 1.2 ng/mL (Option B) is within the safe therapeutic window ($0.5\text{ to }2.0\text{ ng/mL}$). An apical pulse rate of 64 bpm (Option A) exceeds the traditional threshold ($<60\text{ bpm}$) for withholding the drug in adults. Alterations in serum potassium, magnesium, and calcium alter myocardial sensitivity to digoxin, whereas serum sodium (Option D) does not have a direct causal correlation with toxicity."
  },
  {
    id: 34,
    type: "mcq",
    question: "A client diagnosed with bipolar I disorder is prescribed lithium carbonate 300 mg orally three times daily. During a routine follow-up clinic visit, the client reports persistent bilateral hand tremors, blurred vision, and an irregular, pounding heartbeat. Which action should the nurse implement first?",
    options: [
      "Advise the client to restrict their dietary sodium intake over the next 48 hours.",
      "Instruct the client to skip their next scheduled dose and come in for a stat serum lithium level draw.",
      "Inform the client that these are expected transient side effects that will subside in 2 weeks.",
      "Schedule an outpatient consultation with a physical therapist to manage the tremors."
    ],
    answer: [1],
    rationale: "The client is demonstrating unequivocal neuro-cardiac signs of advanced lithium toxicity (blurred vision, cardiac dysrhythmias, and coarse muscle tremors). Lithium possesses an exceptionally narrow therapeutic window ($0.6\text{ to }1.2\text{ mEq/L}$). At the first clinical presentation of toxicity, the drug must be withheld, and a stat serum lithium level must be evaluated. Dietary sodium restriction (Option A) is highly dangerous; the renal system reabsorbs lithium in the presence of low sodium, which rapidly accelerates serum toxic accumulation. These are toxic manifestations requiring emergency medical intervention, not benign transient side effects."
  },
  {
    id: 35,
    type: "mcq",
    question: "A postpartum client is receiving a continuous intravenous infusion of magnesium sulfate at 2 g/hr for severe preeclampsia. During the hourly assessment, the nurse notes a respiratory rate of 10 breaths/min, deep tendon reflexes (DTRs) are absent (0), and the total urine output has been 15 mL over the past hour. Which medication should the nurse ensure is immediately available at the bedside?",
    options: [
      "Protamine sulfate",
      "Calcium gluconate",
      "Naloxone hydrochloride",
      "Flumazenil"
    ],
    answer: [1],
    rationale: "The client is exhibiting clinical criteria for severe magnesium sulfate toxicity, characterized by central nervous system and neuromuscular depression (bradypnea, loss of DTRs, and diminished renal clearance due to oliguria). The specific antidote required to displace magnesium and reverse life-threatening neuromuscular blockade is calcium gluconate. Protamine sulfate (Option A) reverses unfractionated heparin; naloxone (Option C) reverses opioid-induced respiratory depression; flumazenil (Option D) is an antagonist used for benzodiazepine overdoses."
  },
  {
    id: 36,
    type: "mcq",
    question: "A client recovering from a total hip arthroplasty suddenly reports sharp, pleuritic chest pain and severe shortness of breath. The nurse notes an oxygen saturation of 84% on room air, tachycardia, and extreme anxiety. After initiating high-flow oxygen via a non-rebreather mask, which healthcare provider order should the nurse anticipate executing next?",
    options: [
      "Initiate a continuous weight-based intravenous unfractionated heparin infusion.",
      "Administer oral warfarin 5 mg immediately.",
      "Administer subcutaneous low-molecular-weight heparin (enoxaparin) daily.",
      "Prepare the client for an emergency surgical embolectomy within 30 minutes."
    ],
    answer: [0],
    rationale: "The presentation of acute-onset dyspnea, pleuritic chest pain, hypoxemia, and deep anxiety in a post-orthopedic patient points directly to an acute pulmonary embolism (PE). Following emergency oxygenation via a non-rebreather mask, the priority medical intervention is the immediate initiation of a continuous weight-based IV unfractionated heparin infusion. Heparin acts rapidly to stop thrombus propagation and prevent secondary clotting cascades from compromising pulmonary vascular flow. Oral warfarin (Option B) requires days to yield a therapeutic effect. Subcutaneous low-molecular-weight heparin (Option C) is appropriate for stable lower-acuity management or prophylaxis, but does not allow the rapid titration required for an emergent, potentially unstable PE. Surgical intervention (Option D) is restricted to patients in profound hemodynamic shock."
  },
  {
    id: 37,
    type: "mcq",
    question: "The nurse is caring for a client with advanced cirrhosis who has developed hepatic encephalopathy. The healthcare provider prescribes lactulose 30 mL orally four times daily. Which clinical parameter should the nurse monitor closely to evaluate the structural efficacy of this therapy?",
    options: [
      "Daily documentation of the number of loose, formed bowel movements.",
      "Gradual improvement in the client's cognitive orientation and mental status.",
      "A steady drop in the serum alanine aminotransferase (ALT) levels.",
      "An increase in the total daily urine output to greater than 2,000 mL."
    ],
    answer: [1],
    rationale: "As outlined in Lewis's Medical-Surgical Nursing, lactulose lowers circulating blood ammonia concentrations by acidifying the colonic contents. This environment converts diffusible ammonia ($NH_3$) into non-absorbable ammonium ions ($NH_4^+$), trapping it in the gut to be purged via an osmotic laxative effect. Because ammonia is a potent neurotoxin that crosses the blood-brain barrier to disrupt cerebral function, the definitive measure of lactulose efficacy is the reduction of neurological deficits—evidenced by improved mental status, clearing orientation, and resolution of asterixis. Stool frequency (Option A) confirms drug compliance and tracking of side effects, but cognitive re-orientation represents the ultimate clinical therapeutic goal."
  },
  {
    id: 38,
    type: "sata",
    question: "An adult client with acute myeloid leukemia is admitted to the oncology unit with a profound Absolute Neutrophil Count (ANC) of 350/mm³. Which protective environmental isolation protocols must the nurse institute immediately? (Select all that apply)",
    options: [
      "Place the client in a private room with positive-pressure HEPA filtration.",
      "Restrict fresh or raw fruits, vegetables, and live flowers from entering the room.",
      "Place the client in a negative-pressure airflow isolation room.",
      "Require all individuals entering the room to wear an N95 respirator mask.",
      "Ensure meticulous hand hygiene is performed by all individuals prior to client contact."
    ],
    answer: [0, 1, 4],
    rationale: "An Absolute Neutrophil Count (ANC) below $500/\text{mm}^3$ indicates severe neutropenia, inducing extreme susceptibility to life-threatening opportunistic pathogens. Protective environmental precautions (reverse isolation) are required. This mandates a private room with positive-pressure airflow, which ensures that air flows out of the room rather than pulling unmonitored environmental pathogens in. Fresh flowers, live plants, standing water, and unpeeled raw foods are strictly prohibited due to fungal spores or bacterial vectors (e.g., *Pseudomonas*). Meticulous hand hygiene remains the primary mechanism for preventing nosocomial transmission. Negative-pressure rooms (Option C) and N95 respirators (Option D) are explicitly designated for airborne infection isolation (e.g., tuberculosis) to contain particles inside the room, which would provide no protection to this immunocompromised client."
  },
  {
    id: 39,
    type: "mcq",
    question: "A client with a known history of Graves' disease is admitted to the critical care unit following an acute systemic infection. The nurse notes a temperature of 104.4°F (40.2°C), extreme agitation, a heart rate of 158 beats/min showing atrial fibrillation, and severe diaphoresis. Which immediate treatment arc should the nurse anticipate?",
    options: [
      "Administering IV levothyroxine sodium followed by rapid active external rewarming.",
      "Administering antithyroid medications (PTU/methimazole) and intravenous beta-blockers.",
      "Preparing the client for an emergency bilateral adrenalectomy within 1 hour.",
      "Administering continuous intravenous infusions of 5% dextrose in water alone."
    ],
    answer: [1],
    rationale: "The client exhibits classic signs of a Thyroid Storm (thyrotoxic crisis), a medical emergency brought on by acute stressors like infection in hyperthyroid patients. Immediate clinical management requires halting thyroid hormone synthesis and blocking systemic hyper-adrenergic cardiovascular activity. Antithyroid drugs (propylthiouracil or methimazole) inhibit hormone synthesis, while IV beta-blockers (such as esmolol or propranolol) quickly manage tachyarrhythmias, decrease cardiac workload, and lower hyperpyrexia. Levothyroxine (Option A) is a thyroid hormone replacement that would worsen the crisis. Adrenalectomies (Option C) are unrelated to thyrotoxicosis crisis resolution."
  },
  {
    id: 40,
    type: "mcq",
    question: "A client is prescribed phenelzine for treatment-resistant depression. During a discharge counseling session, the nurse determines that the client requires further teaching if they select which menu option for lunch?",
    options: [
      "Grilled chicken breast with a baked potato and green beans.",
      "A sandwich with aged cheddar cheese, pepperoni, and a glass of red wine.",
      "Scrambled eggs with fresh spinach and whole-wheat toast.",
      "Broiled salmon fillets with steamed white rice and asparagus."
    ],
    answer: [1],
    rationale: "Phenelzine is a Monoamine Oxidase Inhibitor (MAOI). MAOIs disrupt the normal breakdown of tyramine within the gastrointestinal tract. Consuming items high in tyramine—such as aged cheeses (cheddar), cured/fermented meats (pepperoni), and red wine or tap beers—leads to systemic tyramine accumulation. This triggers a massive, sudden release of endogenous norepinephrine, resulting in an acute, life-threatening hypertensive crisis. Options A, C, and D contain fresh, non-aged dietary selections that carry no tyramine toxicity risks and are safe to consume."
  },
  {
    id: 41,
    type: "mcq",
    question: "The nurse is administering a first-time intravenous dose of vancomycin 1,500 mg over a prescribed 60-minute window to a client with MRSA bacteremia. Fifteen minutes into the infusion, the client develops intense flushing, pruritus, and an erythematous maculopapular rash across the face, neck, and upper torso. What is the nurse's priority action?",
    options: [
      "Terminate the infusion permanently, document an immediate severe anaphylactic shock event, and prepare for epinephrine delivery.",
      "Stop the infusion temporarily, evaluate the client's hemodynamic stability, and resume at a significantly slower rate.",
      "Increase the infusion flow rate to deliver the remaining medication before airway swelling develops.",
      "Administer a prescribed dose of subcutaneous regular insulin to treat a drug-induced glucose spike."
    ],
    answer: [1],
    rationale: "The client's presentation characterizes 'Red Man Syndrome' (vancomycin infusion reaction), a rate-dependent reaction caused by rapid intravenous infusion that triggers a non-immune mediated histamine release from mast cells. It is not a true Type I IgE-mediated allergic hypersensitivity or anaphylaxis (Option A), provided the client does not display bronchospasm, wheezing, or angioedema. The primary nursing intervention is to pause the infusion, evaluate blood pressure and respiratory status, wait for symptoms to lessen, and resume at a significantly slower rate (infusing at a maximum velocity of 1,000 mg over at least 60 minutes). Accelerating the rate (Option C) would intensify histamine release and risk severe hypotension."
  },
  {
    id: 42,
    type: "mcq",
    question: "An infant diagnosed with Tetralogy of Fallot begins to cry intensely during a blood draw, becoming increasingly cyanotic with rapid, labored respirations. Which action should the nurse implement first?",
    options: [
      "Administer high-flow oxygen via a pediatric face mask.",
      "Place the infant in a knee-chest position.",
      "Prepare for immediate endotracheal intubation.",
      "Administer a prescribed PRN dose of intravenous morphine sulfate."
    ],
    answer: [1],
    rationale: "The infant is experiencing a hypercyanotic event ('tet spell'), characterized by acute right ventricular infundibular spasms that reduce pulmonary perfusion and increase right-to-left shunting through the ventricular septal defect (VSD). The absolute initial nursing action is to place the infant in a knee-chest position. This position raises systemic vascular resistance (SVR), which shifts blood flow away from the aorta and forces unoxygenated blood through the pulmonary artery into the lungs. While oxygenation (Option A) and morphine administration (Option D) are standard parts of the care protocol to lower pulmonary vascular resistance and calm the infant, physical knee-chest positioning provides the fastest, most effective structural correction. Intubation (Option C) is reserved for respiratory failure."
  },
  {
    id: 43,
    type: "mcq",
    question: "A nurse is reviewing the telemetry strip of a client who had a permanent ventricular-paced pacemaker inserted 24 hours ago. The nurse observes pacemaker spikes on the rhythm strip, but they are not followed by a QRS complex. How should the nurse document and interpret this finding?",
    options: [
      "Failure to sense.",
      "Failure to capture.",
      "Failure to pace.",
      "Normal synchronous pacing function."
    ],
    answer: [1],
    rationale: "When a pacemaker delivers an electrical discharge (visible as a sharp pacing spike on the ECG) but the adjacent myocardial tissue fails to depolarize, the condition is classified as a 'failure to capture.' On a telemetry strip, this is identified by a pacemaker spike that is not followed by its corresponding QRS complex (or P wave if thin atrial pacing wires are driven). This requires rapid clinical intervention because the heart fails to contract effectively despite receiving the device's electrical stimulus. Failure to sense (Option A) occurs when the pacemaker fails to recognize intrinsic cardiac depolarization and fires inappropriately. Failure to pace (Option C) indicates that the device fails to generate an electrical impulse entirely, resulting in missing spikes on the ECG."
  },
  {
    id: 44,
    type: "mcq",
    question: "abortion: Expulsion from the uterus of the products of conception before the fetus is viable (less than ____ weeks age of gestation).",
    options: ["12 weeks", "20 weeks", "24 weeks", "28 weeks"],
    answer: [1],
    rationale: "Fetal viability is typically defined around 20 weeks of gestation, before which expulsion of the products of conception is classified as an abortion."
  },
  {
    id: 45,
    type: "mcq",
    question: "abortion: The ____ stoppage of a natural or a pathological process.",
    options: ["Spontaneous", "Delayed", "Premature", "Therapeutic"],
    answer: [2],
    rationale: "Abortion broadly represents the premature arrest or stoppage of a natural or pathological progression."
  },
  {
    id: 46,
    type: "mcq",
    question: "abruptio placentae: Premature ____ of a normally positioned placenta in a pregnancy.",
    options: ["Separation", "Implantation", "Calcification", "Hypertrophy"],
    answer: [0],
    rationale: "Abruptio placentae refers directly to the premature detachment or separation of a normally implanted placenta from the uterine wall before delivery."
  },
  {
    id: 47,
    type: "mcq",
    question: "abruptio placentae: Occurs in a pregnancy of at least ____ weeks' gestation either before labor or during labor but before delivery.",
    options: ["16 weeks", "20 weeks", "28 weeks", "36 weeks"],
    answer: [1],
    rationale: "This condition typically presents in a pregnancy that has reached at least 20 weeks of gestation."
  },
  {
    id: 48,
    type: "mcq",
    question: "abuse: Misuse or particularly excessive use of a substance, service, or equipment; commonly refers to improper use of a ____ or similar substance.",
    options: ["Device", "Drug", "Asset", "Chemical"],
    answer: [1],
    rationale: "Substance abuse most frequently denotes the improper, excessive, or non-medical use of a drug."
  },
  {
    id: 49,
    type: "mcq",
    question: "accommodation: In ophthalmology: adjustment of the ____ of the eye for various distances.",
    options: ["Cornea", "Retina", "Lens", "Pupil"],
    answer: [2],
    rationale: "Accommodation is the physiological process by which the ciliary muscles alter the curvature of the crystalline lens to focus clearly on near or distant objects."
  },
  {
    id: 50,
    type: "mcq",
    question: "accommodation: In sociology: the use of compromise, arbitration, or negotiation to resolve conflicts. Also called ____.",
    options: ["Assimilation", "Adjustment", "Acculturation", "Affiliation"],
    answer: [1],
    rationale: "In a sociological context, accommodation serves as an adjustment mechanism enabling individuals or groups to co-exist peacefully without resolving basic differences."
  },
  {
    id: 51,
    type: "mcq",
    question: "Acetylcholine: A ____ that is produced in the central and parasympathetic autonomic nervous systems, crucial to arousal, learning, memory, and motor function.",
    options: ["Hormone", "Neurotransmitter", "Enzyme", "Amino acid"],
    answer: [1],
    rationale: "Acetylcholine is a key chemical neurotransmitter that mediates nerve impulse transmission across junctions in both the central and parasympathetic peripheral nervous systems."
  },
  {
    id: 52,
    type: "mcq",
    question: "acquired immunodeficiency syndrome (AIDS): A disorder of the ____ characterized by an inability to mount a successful defense against infection.",
    options: ["Lymphatic system", "Immune system", "Endocrine system", "Circulatory system"],
    answer: [1],
    rationale: "AIDS is a profound, acquired impairment of the body's immune system that cripples its defensive capacity against invading pathogens."
  },
  {
    id: 53,
    type: "mcq",
    question: "acquired immunodeficiency syndrome (AIDS): Characterized by an inability to defend against organisms that usually aren't pathogenic, known as ____ infections.",
    options: ["Nosocomial", "Opportunistic", "Systemic", "Latent"],
    answer: [1],
    rationale: "Infections caused by microbes that take advantage of a weakened immune defense but normally do not cause illness in healthy individuals are termed opportunistic infections."
  },
  {
    id: 54,
    type: "mcq",
    question: "acquired immunodeficiency syndrome (AIDS): The syndrome is caused by infection with the human immunodeficiency virus, which causes a marked depletion in the number of ____ T cells.",
    options: ["Cytotoxic", "Suppressor", "Helper", "Memory"],
    answer: [2],
    rationale: "The Human Immunodeficiency Virus (HIV) selectively infects, replicates within, and systematically destroys CD4+ helper T cells, which coordinates the wider immune response."
  },
  {
    id: 55,
    type: "mcq",
    question: "acromegaly: A syndrome that results when the ____ pituitary gland produces excess growth hormone after epiphyseal plate closure at puberty.",
    options: ["Anterior", "Posterior", "Intermediate", "Dorsal"],
    answer: [0],
    rationale: "Somatotroph cells located within the anterior lobe of the pituitary gland are responsible for synthesizing and secreting growth hormone."
  },
  {
    id: 56,
    type: "mcq",
    question: "acromegaly: Occurs when the pituitary gland produces excess ____ hormone (GH) after epiphyseal plate closure.",
    options: ["Thyroid", "Growth", "Adrenocorticotropic", "Luteinizing"],
    answer: [1],
    rationale: "Acromegaly is explicitly triggered by a hypersecretion of growth hormone following the physical fusion of long bone growth plates."
  },
  {
    id: 57,
    type: "mcq",
    question: "Active immunity: Acquired immunity caused by the production of ____, either after infection or as a result of vaccination.",
    options: ["Antigens", "Antibodies", "Leukocytes", "Interleukins"],
    answer: [1],
    rationale: "Active immunity is defined by the host's own cellular machinery synthesizing specific protective antibodies following exposure to an external pathogen or immunogenic vaccine."
  },
  {
    id: 58,
    type: "mcq",
    question: "acute lymphocytic leukemia (ALL): A form of leukemia, most commonly occurring in children, marked by large numbers of immature ____ in the blood and blood-forming tissues.",
    options: ["Erythrocytes", "Thrombocytes", "Leukocytes", "Reticulocytes"],
    answer: [2],
    rationale: "Leukemia is a malignancy originating in the bone marrow characterized by the uncontrolled proliferation of abnormal, immature white blood cells (leukocytes)."
  },
  {
    id: 59,
    type: "mcq",
    question: "acute nephritis: Acute inflammation of the ____, possibly involving the glomerulus, tubules, and interstitial tissues.",
    options: ["Liver", "Bladder", "Kidney", "Pancreas"],
    answer: [2],
    rationale: "The suffix '-nephritis' explicitly denotes an inflammatory pathological state localized to the kidney."
  },
  {
    id: 60,
    type: "mcq",
    question: "acute nephritis: Acute inflammation of the kidney, possibly involving the glomerulus, ____, and interstitial tissues.",
    options: ["Nephrons", "Tubules", "Calyces", "Pyramids"],
    answer: [1],
    rationale: "The structural landscape of acute nephritis typically spans an inflammatory infiltration across the functional glomeruli, the renal tubules, and surrounding interstitial matrices."
  },
  {
    id: 61,
    type: "mcq",
    question: "Addison's disease: Results from partial or complete loss of ____, mineralocorticoid, and androgenic function of the adrenal glands.",
    options: ["Glucocorticoid", "Epinephrine", "Norepinephrine", "Calcifediol"],
    answer: [0],
    rationale: "Addison's disease causes destruction of the adrenal cortex, severely impairing its three structural layers and halting the secretion of cortisol (a glucocorticoid), aldosterone, and androgens."
  },
  {
    id: 62,
    type: "mcq",
    question: "Addison's disease: Results from partial or complete loss of glucocorticoid, mineralocorticoid, and ____ function of the adrenal glands.",
    options: ["Estrogenic", "Androgenic", "Progestational", "Catecholamine"],
    answer: [1],
    rationale: "The adrenal cortex synthesizes three main steroid streams: glucocorticoids, mineralocorticoids, and sex steroids, specifically dehydroepiandrosterone (androgenic hormones)."
  },
  {
    id: 63,
    type: "mcq",
    question: "Addisonian crisis: An emergency situation occurring with adrenal ____ and exposure to trauma, surgery, or other severe physiologic stress.",
    options: ["Hyperfunction", "Hypofunction", "Atrophy", "Hyperplasia"],
    answer: [1],
    rationale: "An Addisonian crisis is a life-threatening acute medical status precipitated when a baseline chronic hypofunction of the adrenal cortex cannot handle critical physiological stressors."
  },
  {
    id: 64,
    type: "mcq",
    question: "Addisonian crisis: An emergency situation that exhausts the body's stores of ____.",
    options: ["Catecholamines", "Mineralocorticoids", "Glucocorticoids", "Gonadotropins"],
    answer: [2],
    rationale: "The primary lethal mechanism of an adrenal crisis centers on the absolute exhaustion and deficiency of systemic glucocorticoids (cortisol) required to maintain vascular tone and metabolic stability."
  },
  {
    id: 65,
    type: "mcq",
    question: "adenocarcinoma: A cancer of an epithelium that originates in ____ tissue.",
    options: ["Squamous", "Connective", "Glandular", "Muscular"],
    answer: [2],
    rationale: "An adenocarcinoma is a malignant epithelial neoplasm specifically derived from glandular structures or exhibiting prominent glandular secretion profiles."
  },
  {
    id: 66,
    type: "mcq",
    question: "adrenergic: Activated or transmitted by epinephrine, ____, or a similar substance.",
    options: ["Acetylcholine", "Norepinephrine", "Serotonin", "Dopamine"],
    answer: [1],
    rationale: "Adrenergic pathways and nerve fibers primarily execute their chemical signaling via the sympathetic neurotransmitters epinephrine and norepinephrine."
  },
  {
    id: 67,
    type: "mcq",
    question: "adrenergic: Also called a ____, a drug that stimulates alpha or beta receptors.",
    options: ["Parasympatholytic", "Sympathomimetic", "Parasympathomimetic", "Sympatholytic"],
    answer: [1],
    rationale: "Agents that stimulate adrenergic alpha and beta receptors effectively mimic physiological sympathetic nervous actions, thus earning the designation 'sympathomimetic'."
  },
  {
    id: 68,
    type: "mcq",
    question: "adrenergic blocker: A pharmaceutical substance that acts to inhibit the action of ____ at the adrenergic receptors.",
    options: ["Endorphins", "Catecholamines", "Prostaglandins", "Glucocorticoids"],
    answer: [1],
    rationale: "Adrenergic blockers competitively or non-competitively occupy receptor configurations to halt the binding and physiological action of endogenously produced catecholamines."
  },
  {
    id: 69,
    type: "mcq",
    question: "____ ____: Documented written or verbal instructions by the client about his wishes for life-sustaining medical care in the event he becomes incapacitated.",
    options: ["Informed consent", "Advance directive", "Medical power", "Living testament"],
    answer: [1],
    rationale: "An advance directive is a legally binding framework dictating a person's explicit desires regarding end-of-life clinical interventions before losing decision-making capacity."
  },
  {
    id: 70,
    type: "mcq",
    question: "agonist: In anatomy: any muscle in a state of ____ whose action is opposed by another muscle with which it’s paired.",
    options: ["Relaxation", "Contraction", "Atrophy", "Extension"],
    answer: [1],
    rationale: "An anatomical agonist is a prime mover muscle actively generating tension through cellular contraction to execute a specific movement, working counter to its paired antagonist."
  },
  {
    id: 71,
    type: "mcq",
    question: "agoraphobia: An intense, irrational fear of being in ____ spaces or of venturing out from the home or other familiar setting.",
    options: ["Enclosed", "Open", "Elevated", "Dark"],
    answer: [1],
    rationale: "Agoraphobia is a clinical anxiety disorder rooted in profound fear or anxiety linked to situations like open spaces, public transit, or lines from which escape might prove challenging."
  },
  {
    id: 72,
    type: "mcq",
    question: "agranulocytosis: Failure of the bone marrow to make enough ____ cells (neutrophils).",
    options: ["Red blood", "White blood", "Stem", "Plasma"],
    answer: [1],
    rationale: "Agranulocytosis represents an acute, severe drop or complete structural failure in producing mature granulocytic white blood cells, primarily compromising neutrophils."
  },
  {
    id: 73,
    type: "mcq",
    question: "agranulocytosis: ____ is the soft tissue inside bones that helps form blood cells.",
    options: ["Yellow marrow", "Bone marrow", "Periosteum", "Endosteum"],
    answer: [1],
    rationale: "Bone marrow acts as the primary hematopoietically active tissue nestled within trabecular cavities responsible for generating red, white, and thrombocytic cell lines."
  },
  {
    id: 74,
    type: "mcq",
    question: "akinesia: Loss of the ability to ____ voluntarily.",
    options: ["Speak", "Swallow", "Move", "Breathe"],
    answer: [2],
    rationale: "Derived from Greek roots, akinesia translates literally to an absence or profound loss of intentional, voluntary physical movement."
  },
  {
    id: 75,
    type: "mcq",
    question: "aldosterone: A steroid hormone (mineralocorticoid family) produced by the outer section of the adrenal ____ in the adrenal gland.",
    options: ["Medulla", "Cortex", "Capsule", "Infundibulum"],
    answer: [1],
    rationale: "Aldosterone is manufactured specifically within the outer zona glomerulosa layer of the endocrine gland's adrenal cortex."
  },
  {
    id: 76,
    type: "mcq",
    question: "____ test: A test designed to evaluate a client's collateral circulation in the arm before an invasive arterial procedure.",
    options: ["Allen's", "Allis's", "Apgar", "Babinski"],
    answer: [0],
    rationale: "The Allen's test safely evaluates patency between the radial and ulnar arteries to ensure sufficient collateral hand perfusion before cannulating or drawing from the radial artery."
  },
  {
    id: 77,
    type: "mcq",
    question: "alopecia: Loss of ____ from the head or body.",
    options: ["Pigment", "Hair", "Sensation", "Weight"],
    answer: [1],
    rationale: "Alopecia is the formal clinical terminology designating partial or complete hair shedding or baldness across any dermally active zone."
  },
  {
    id: 78,
    type: "mcq",
    question: "Alport syndrome or hereditary nephritis: A genetic disorder characterized by ____, end-stage kidney disease, and hearing loss.",
    options: ["Nephrotic syndrome", "Glomerulonephritis", "Polycystic kidney", "Hydronephrosis"],
    answer: [1],
    rationale: "Alport syndrome arises from structural mutations in Type IV collagen architecture, directly inducing hereditary progressive glomerulonephritis linked alongside sensorineural hearing anomalies."
  },
  {
    id: 79,
    type: "mcq",
    question: "Alzheimer’s disease: An irreversible, progressive ____ disease that slowly destroys memory and thinking skills.",
    options: ["Neuromuscular", "Brain", "Cardiovascular", "Autoimmune"],
    answer: [1],
    rationale: "Alzheimer's is classified broadly as an insidious neurodegenerative brain disorder marked by pathognomonic beta-amyloid plaques and tau neurofibrillary tangles."
  },
  {
    id: 80,
    type: "mcq",
    question: "amblyopia: Decreased ____ acuity in one eye in the absence of detectable structural or pathologic changes.",
    options: ["Auditory", "Tactile", "Visual", "Olfactory"],
    answer: [2],
    rationale: "Often called 'lazy eye,' amblyopia stems from abnormal neural visual processing during childhood development, causing reduced visual sharpness despite an anatomically sound ocular globe."
  },
  {
    id: 81,
    type: "mcq",
    question: "amenorrhea: The absence or cessation of ____.",
    options: ["Ovulation", "Lactation", "Menstruation", "Gestation"],
    answer: [2],
    rationale: "Amenorrhea describes an atypical absence of monthly menstrual bleeding in individuals of reproductive age."
  },
  {
    id: 82,
    type: "mcq",
    question: "amniocentesis: Withdrawal of a sample of ____ fluid by transabdominal puncture and needle aspiration.",
    options: ["Peritoneal", "Amniotic", "Cerebrospinal", "Pleural"],
    answer: [1],
    rationale: "An amniocentesis uses guided transabdominal needle access to extract supportive amniotic fluid surrounding a developing fetus for direct cytogenetic analysis."
  },
  {
    id: 83,
    type: "mcq",
    question: "amniotomy: Artificial ____ of the membranes.",
    options: ["Stripping", "Rupture", "Sealing", "Insufflation"],
    answer: [1],
    rationale: "An amniotomy utilizes a specialized hook tool to mechanically cause an artificial rupture of the amniotic sac membranes to induce or augment active labor."
  },
  {
    id: 84,
    type: "mcq",
    question: "analgesic: Having the ability to relieve ____.",
    options: ["Fever", "Pain", "Inflammation", "Spasms"],
    answer: [1],
    rationale: "The fundamental structural definition and intent of any analgesic mechanism centers directly upon alleviating physical pain."
  },
  {
    id: 85,
    type: "mcq",
    question: "analgesic: A medication that relieves ____.",
    options: ["Anxiety", "Nausea", "Pain", "Congestion"],
    answer: [2],
    rationale: "Analgesic medications target peripheral or central pain reception paths to actively suppress painful neurological perceptions."
  },
  {
    id: 86,
    type: "mcq",
    question: "anaphylaxis: A systemic reaction to a previously encountered ____.",
    options: ["Antibody", "Antigen", "Pathogen", "Toxin"],
    answer: [1],
    rationale: "Anaphylaxis is an acute, life-threatening type-1 hypersensitivity phenomenon occurring when an individual is re-exposed to a specific sensitizing foreign antigen."
  },
  {
    id: 87,
    type: "mcq",
    question: "anastomosis: A surgical procedure in which two blood vessels, ducts, or other tubelike structures are joined. Types include ____ and side-to-side.",
    options: ["End-to-end", "Blind-loop", "Stricture-to-stricture", "Diverticular"],
    answer: [0],
    rationale: "An end-to-end configuration joins terminal opened cross-sections of two independent tubular structures to create continuous luminal flow."
  },
  {
    id: 88,
    type: "mcq",
    question: "aneurysm: An abnormal widening or ____ of a portion of an artery due to weakness in the blood vessel wall.",
    options: ["Narrowing", "Ballooning", "Hardening", "Rupturing"],
    answer: [1],
    rationale: "An aneurysm causes a visible out-pouching or ballooning structural profile where blood pressure stresses a locally degraded vascular wall segment."
  },
  {
    id: 89,
    type: "mcq",
    question: "aneurysm: An abnormal widening or ballooning of a portion of an ____ due to weakness in the wall of the blood vessel.",
    options: ["Vein", "Artery", "Capillary", "Venule"],
    answer: [1],
    rationale: "Aneurysms occur almost exclusively within the high-pressure hemodynamic arterial circuit where systemic wall shear stresses are highest."
  },
  {
    id: 90,
    type: "mcq",
    question: "angina pectoris: Severe chest ____ characterized by sensations of spasm, constriction, and crushing weight.",
    options: ["Tenderness", "Pain", "Numbness", "Burning"],
    answer: [1],
    rationale: "Angina pectoris presents clinically as transient, heavy chest pain or discomfort when cardiac metabolic workload outpaces current coronary perfusion."
  },
  {
    id: 91,
    type: "mcq",
    question: "angina pectoris: Usually results from myocardial ____ deprivation secondary to atherosclerosis.",
    options: ["Glucose", "Oxygen", "Calcium", "Potassium"],
    answer: [1],
    rationale: "The ischemic cascade driving anginal episodes stems fundamentally from cellular oxygen deprivation within matching myocardial tissue beds."
  },
  {
    id: 92,
    type: "mcq",
    question: "angina pectoris: Caused by myocardial oxygen deprivation secondary to atherosclerosis of the ____ arteries.",
    options: ["Pulmonary", "Carotid", "Coronary", "Renal"],
    answer: [2],
    rationale: "Atherosclerotic lesions narrowing the coronary arteries restrict the volume of oxygenated blood delivered directly to the heart muscle cells."
  },
  {
    id: 93,
    type: "mcq",
    question: "ankylosing spondylitis: A form of ____ that primarily affects the spine, although other joints can become involved.",
    options: ["Osteoporosis", "Arthritis", "Scoliosis", "Spondylolisthesis"],
    answer: [1],
    rationale: "Ankylosing spondylitis is a systemic, seronegative spondyloarthropathy belonging to the chronic inflammatory arthritis family."
  },
  {
    id: 94,
    type: "mcq",
    question: "ankylosing spondylitis: It causes ____ of the spinal joints (vertebrae) that can lead to severe, chronic pain.",
    options: ["Calcification", "Degeneration", "Inflammation", "Subluxation"],
    answer: [2],
    rationale: "The underlying drive of ankylosing spondylitis is severe, continuous enthesitis and joint inflammation that can ultimately result in pathological bony fusion (ankylosis)."
  },
  {
    id: 95,
    type: "mcq",
    question: "anorexia: Loss of ____.",
    options: ["Hair", "Sleep", "Appetite", "Memory"],
    answer: [2],
    rationale: "As a baseline clinical symptom, anorexia describes a generalized loss, reduction, or absence of the natural urge to eat (appetite)."
  },
  {
    id: 96,
    type: "mcq",
    question: "anorexia nervosa: An ____ disorder, most common among adolescent girls, characterized by an aversion to food and fear of obesity.",
    options: ["Mood", "Anxiety", "Eating", "Personality"],
    answer: [2],
    rationale: "Anorexia nervosa is a complex psychological eating disorder marked by extreme caloric self-restriction, distorted body image, and intense weight anxiety."
  },
  {
    id: 97,
    type: "mcq",
    question: "anorexia nervosa: Characterized by an aversion to eating, most common among ____ girls.",
    options: ["Toddler", "Adolescent", "Neonatal", "Geriatric"],
    answer: [1],
    rationale: "Epidemiological data shows that anorexia nervosa frequently manifests during the critical developmental and psychosocial transitions of adolescence."
  },
  {
    id: 98,
    type: "mcq",
    question: "antagonist: In pharmacology: a drug that ____ the action of another drug.",
    options: ["Enhances", "Nullifies", "Mimics", "Accelerates"],
    answer: [1],
    rationale: "Pharmacological antagonists attach to receptor targets without activating them, blocking endogenous ligands or other exogenous drugs from binding and nullifying their effects."
  },
  {
    id: 99,
    type: "mcq",
    question: "anteroposterior-to-lateral: Direction referring from ____ to back and side to side.",
    options: ["Top", "Front", "Left", "Inside"],
    answer: [1],
    rationale: "The prefix 'antero-' specifies an anatomical orientation starting from or relative to the front aspect of the subject."
  },
  {
    id: 100,
    type: "mcq",
    question: "anteroposterior-to-lateral: Direction referring from front to ____ and side to side.",
    options: ["Back", "Bottom", "Right", "Outside"],
    answer: [0],
    rationale: "The root '-posterior' clarifies the vector's direction toward the back aspect of the target organism or region."
  },
  {
    id: 101,
    type: "mcq",
    question: "Anthrax: An acute disease caused by the bacterium ____ ____.",
    options: ["Clostridium tetani", "Bacillus anthracis", "Staphylococcus aureus", "Mycobacterium tuberculosis"],
    answer: [1],
    rationale: "Anthrax is caused explicitly by the spore-forming, Gram-positive rod bacterium taxonomically classified as Bacillus anthracis."
  },
  {
    id: 102,
    type: "mcq",
    question: "anticholinergic: Of or relating to blockade of the impulses of ____ or other cholinergic nerve fibers.",
    options: ["Sympathetic", "Parasympatholytic", "Somatic", "Central"],
    answer: [1],
    rationale: "Anticholinergic drugs block acetylcholine receptors, primary chemical transmitters in the parasympathetic nervous system."
  },
  {
    id: 103,
    type: "mcq",
    question: "anticipatory guidance: Information about a disorder or about the normal ____ and development expectations given before an event.",
    options: ["Weight", "Growth", "Cognitive", "Behavioral"],
    answer: [1],
    rationale: "Anticipatory guidance provides parents or guardians with structural insights on expected physical growth parameters before specific childhood milestones."
  },
  {
    id: 104,
    type: "mcq",
    question: "anticipatory guidance: Information regarding growth and ____ expectations of a specific age-group given ahead of time.",
    options: ["Adaptation", "Development", "Regression", "Maturation"],
    answer: [1],
    rationale: "This clinical nursing strategy proactively educates caregivers on expected developmental stages to optimize health and environmental safety."
  },
  {
    id: 105,
    type: "mcq",
    question: "antiembolism stockings: Elasticized stockings prescribed to enhance venous blood flow and prevent ____ resulting from pooling of blood.",
    options: ["Arteriosclerosis", "Thromboembolism", "Lymphedema", "Thrombocytopenia"],
    answer: [1],
    rationale: "By applying graduated external compression, antiembolism stockings enhance deep venous return and minimize static pooling to mitigate the risk of deep vein thrombosis and subsequent thromboembolism."
  },
  {
    id: 106,
    type: "mcq",
    question: "antisocial personality disorder: A disorder that manifests after age ____ as a pervasive disregard for and violation of the rights of others.",
    options: ["10", "15", "18", "21"],
    answer: [1],
    rationale: "Diagnostic manuals dictate that a pervasive behavioral display violating societal norms and human boundaries must reliably feature historical presence from at least age 15 to fit this diagnostic category."
  },
  {
    id: 107,
    type: "mcq",
    question: "anuria: Absence of ____ production.",
    options: ["Bile", "Saliva", "Urine", "Sweat"],
    answer: [2],
    rationale: "Anuria represents a critical acute kidney failure state defined clinically as an absolute or near-absolute cessation of urine output (less than 100 mL/day)."
  },
  {
    id: 108,
    type: "mcq",
    question: "____: A psychological and physiological state characterized by somatic, emotional, cognitive, and behavioral components, giving a displeasing feeling of fear and concern.",
    options: ["Depression", "Anxiety", "Mania", "Psychosis"],
    answer: [1],
    rationale: "Anxiety presents as an unsettling state of apprehension and physiological hyper-arousal triggered by perceived, future, or poorly defined threats."
  },
  {
    id: 109,
    type: "mcq",
    question: "aortic stenosis: An abnormal narrowing of the orifice of the ____ valve, preventing normal blood flow from the left ventricle.",
    options: ["Mitral", "Tricuspid", "Aortic", "Pulmonary"],
    answer: [2],
    rationale: "Aortic stenosis restricts the aortic valve leaflet opening, which blocks forward blood ejection from the high-pressure left ventricular chamber into the systemic aorta."
  },
  {
    id: 110,
    type: "mcq",
    question: "Apgar score: A numerical evaluation of a neonate's condition measuring heart rate, ____ effort, muscle tone, reflex responses, and skin color.",
    options: ["Gastrointestinal", "Cardiovascular", "Respiratory", "Neurological"],
    answer: [2],
    rationale: "The 'R' component of the APGAR acronym evaluates neonatal respiratory effort, assessing signs ranging from an absent breath profile to a robust, vigorous newborn cry."
  },
  {
    id: 111,
    type: "mcq",
    question: "Apgar score: Evaluates five criteria: heart rate, respiratory effort, ____ tone, reflex responses, and skin color.",
    options: ["Vascular", "Muscle", "Tendon", "Postural"],
    answer: [1],
    rationale: "The 'G' and 'A' fields check grimace and activity levels, looking specifically at muscular tone and flexion resistance in newborn limbs."
  },
  {
    id: 112,
    type: "mcq",
    question: "Apgar score: The score is usually obtained at ____ minute and five minutes after birth.",
    options: ["One", "Two", "Three", "Zero"],
    answer: [0],
    rationale: "Standard clinical protocols require calculating the initial APGAR score exactly 1 minute post-delivery to judge how well the infant tolerated the birthing transition."
  },
  {
    id: 113,
    type: "mcq",
    question: "Apgar score: Evaluated at one minute and ____ minutes after birth.",
    options: ["Three", "Five", "Ten", "Fifteen"],
    answer: [1],
    rationale: "The second standard APGAR metric is calculated at the 5-minute mark to assess ongoing extrauterine adaptation and response to initial stabilizing care."
  },
  {
    id: 114,
    type: "mcq",
    question: "aphasia: Loss or impairment of the ability to ____ through speech, written language, or signs, resulting from brain disease or trauma.",
    options: ["Conceptualize", "Articulate", "Communicate", "Comprehend"],
    answer: [2],
    rationale: "Aphasia describes an acquired neurogenic deficit that compromises an individual's capacity to communicate, affecting either the expression or comprehension of language."
  },
  {
    id: 115,
    type: "mcq",
    question: "aphthous stomatitis: A recurring disease marked by the eruption of ulcers on the mucous membranes of the ____.",
    options: ["Stomach", "Mouth", "Intestines", "Pharynx"],
    answer: [1],
    rationale: "Aphthous stomatitis presents as painful, recurrent small ulcerative lesions (canker sores) limited to the non-keratinized mucosal lining of the mouth."
  },
  {
    id: 116,
    type: "mcq",
    question: "appendicitis: Inflammation of the ____ appendix.",
    options: ["Cecal", "Vermiform", "Ileal", "Retrocecal"],
    answer: [1],
    rationale: "Appendicitis describes an acute inflammatory process occurring in the narrow, blind-ended pouch known anatomically as the vermiform appendix."
  },
  {
    id: 117,
    type: "mcq",
    question: "appendicitis: When acute, appendicitis commonly necessitates an ____ to prevent perforation and subsequent peritonitis.",
    options: ["Appendectomy", "Laparotomy", "Colectomy", "Endoscopy"],
    answer: [0],
    rationale: "The standard definitive treatment for acute appendicitis is surgical removal of the structure, an appendectomy, to avert rupture and fecal contamination of the peritoneal space."
  },
  {
    id: 118,
    type: "mcq",
    question: "apraxia: Complete or partial inability to perform purposeful ____ in the absence of sensory or motor impairment.",
    options: ["Tasks", "Vocalizations", "Movements", "Reflexes"],
    answer: [2],
    rationale: "Apraxia is a neurological impairment characterized by the inability to execute purposeful, learned physical movements, despite having intact motor strength and sensory pathways."
  },
  {
    id: 119,
    type: "mcq",
    question: "arthroscopy: A minimally invasive surgical procedure for examination and treatment of damage inside a ____.",
    options: ["Bone", "Joint", "Muscle", "Bursa"],
    answer: [1],
    rationale: "The prefix 'arthro-' explicitly denotes a joint cavity space, the structural target of this direct endoscopic visualization procedure."
  },
  {
    id: 120,
    type: "mcq",
    question: "arthroscopy: Performed using a specialized visualization instrument called an ____.",
    options: ["Endoscope", "Arthroscope", "Laparoscope", "Otoscope"],
    answer: [1],
    rationale: "An arthroscope is an endoscopic camera system designed specifically to illuminate and navigate the tight anatomical interior of joint capsules."
  },
  {
    id: 121,
    type: "mcq",
    question: "ascites: A gastroenterological term for an accumulation of fluid in the ____ cavity.",
    options: ["Pleural", "Peritoneal", "Pericardial", "Pelvic"],
    answer: [1],
    rationale: "Ascites describes an abnormal collection of serous exudate or transudate within the sub-abdominal peritoneal cavity space."
  },
  {
    id: 122,
    type: "mcq",
    question: "ascites: The medical condition is also archaically known as abdominal ____.",
    options: ["Edema", "Dropsy", "Hernia", "Distention"],
    answer: [1],
    rationale: "In older medical literature, 'dropsy' was the broad clinical term applied to visible fluid accumulation and swelling within soft tissues or body cavities."
  },
  {
    id: 123,
    type: "mcq",
    question: "asepsis: ____ asepsis refers to the removal or destruction of disease organisms or infected material.",
    options: ["Medical", "Surgical", "Chemical", "Physical"],
    answer: [0],
    rationale: "Medical asepsis utilizes clean techniques to limit the number, growth, and transmission of pathogenic microorganisms in clinical environments."
  },
  {
    id: 124,
    type: "mcq",
    question: "asepsis: ____ asepsis refers to protection against infection before, during, or after surgery by means of sterile technique.",
    options: ["Clean", "Medical", "Surgical", "Environmental"],
    answer: [2],
    rationale: "Surgical asepsis relies on precise sterile techniques designed to keep an operative field entirely free of all microbial life."
  },
  {
    id: 125,
    type: "mcq",
    question: "asthma: A respiratory disorder characterized by recurrent attacks of paroxysmal ____, bronchospasm, wheezing, and coughing.",
    options: ["Apnea", "Dyspnea", "Orthopnea", "Tachypnea"],
    answer: [1],
    rationale: "The physiological airway narrowing in an asthma flare produces sudden episodes of labored breathing and shortness of breath (dyspnea)."
  },
  {
    id: 126,
    type: "mcq",
    question: "asthma: Characterized by bronchospasm, ____ on expiration, and coughing.",
    options: ["Stridor", "Crackles", "Wheezing", "Rhonchi"],
    answer: [2],
    rationale: "Expiratory wheezing is a classic clinical sign of asthma, caused by turbulent airflow forcing its way through narrow, constricted bronchioles."
  },
  {
    id: 127,
    type: "mcq",
    question: "ataxia: Impairment of the ability to coordinate ____ muscle movement.",
    options: ["Involuntary", "Voluntary", "Cardiac", "Smooth"],
    answer: [1],
    rationale: "Ataxia points to a cerebellar pathway defect that disrupts the smooth execution and coordination of intentional, voluntary muscular actions."
  },
  {
    id: 128,
    type: "mcq",
    question: "atopic dermatitis: A ____ inflammation occurring in individuals with a genetic predisposition to allergies.",
    options: ["Mucosal", "Skin", "Vascular", "Dermal"],
    answer: [1],
    rationale: "Atopic dermatitis, commonly known as eczema, presents as a chronic, pruritic inflammatory skin disease linked to immune hypersensitivity pathways."
  },
  {
    id: 129,
    type: "mcq",
    question: "atopic dermatitis: Rash pattern varies with age but usually occurs on the ____ in infants.",
    options: ["Trunk", "Face", "Extremities", "Back"],
    answer: [1],
    rationale: "In infantile atopic dermatitis, lesions commonly present first on the face and scalp before spreading to extensor surfaces."
  },
  {
    id: 130,
    type: "mcq",
    question: "audiometry: Evaluation of hearing using a device called an ____.",
    options: ["Otoscope", "Audiometer", "Oscilloscope", "Tympanometer"],
    answer: [1],
    rationale: "An audiometer is an electroacoustic instrument designed to deliver controlled sound frequencies to quantify a person's specific hearing thresholds."
  },
  {
    id: 131,
    type: "mcq",
    question: "audiometry: Pure tone audiometry evaluates the ability to hear frequencies, usually ranging from 125 to ____ Hz.",
    options: ["4000 Hz", "8000 Hz", "12000 Hz", "16000 Hz"],
    answer: [1],
    rationale: "Standard diagnostic audiometry tests human auditory response across the essential speech clarity frequency spectrum up to 8000 Hz."
  },
  {
    id: 132,
    type: "mcq",
    question: "auditory hallucinations: ____ experiences occurring in the absence of actual external sensory stimuli.",
    options: ["Cognitive", "Perceptual", "Delusional", "Affective"],
    answer: [1],
    rationale: "Hallucinations represent false sensory perceptions where the individual experiences a vivid internal perception without matching external sensory input."
  },
  {
    id: 133,
    type: "mcq",
    question: "auscultatory gap: Absence of ____ sounds between phases I and II while obtaining a blood pressure reading.",
    options: ["Doppler", "Korotkoff", "Murmur", "Heart"],
    answer: [1],
    rationale: "An auscultatory gap describes a temporary silence or disappearance of vascular Korotkoff sounds during blood pressure cuff deflation, occurring between the initial systolic tap and later phases."
  },
  {
    id: 134,
    type: "mcq",
    question: "auscultatory gap: Characterized by the absence of sound between phase I and phase II, which features a ____-like sound.",
    options: ["Tapping", "Swishing", "Blowing", "Thumping"],
    answer: [1],
    rationale: "As blood pressure cuff pressure falls into Phase II, the initial tapping sounds briefly transition into soft, swishing murmurs due to changing turbulent flow profiles."
  },
  {
    id: 135,
    type: "mcq",
    question: "autograft: The surgical transfer of ____ (commonly skin) from one location of the body to another location in the same individual.",
    options: ["Organ", "Tissue", "Muscle", "Marrow"],
    answer: [1],
    rationale: "An autograft refers to tissue harvested from one site and grafted onto another site within the same individual, eliminating the risk of immunological graft rejection."
  },
  {
    id: 136,
    type: "mcq",
    question: "autoimmune disorder: A disorder resulting from an inappropriate immune response directed against the ____.",
    options: ["Host", "Self", "Pathogen", "Foreigner"],
    answer: [1],
    rationale: "Autoimmunity describes a breakdown in self-tolerance, leading the adaptive immune system to target the body's own cells and tissues."
  },
  {
    id: 137,
    type: "mcq",
    question: "autoimmune disorder: Antigens normally found in internal cells stimulate the development of ____ that attack the body's own tissues.",
    options: ["Allergen", "Antibodies", "Antigens", "Cytokines"],
    answer: [1],
    rationale: "The humoral arm of an autoimmune response manufactures autoreactive antibodies (autoantibodies) that bind to self-antigens, triggering tissue destruction."
  },
  {
    id: 138,
    type: "mcq",
    question: "autoimmunity: A condition in which the ____ system mounts an attack against the individual's own body tissues.",
    options: ["Endocrine", "Immune", "Nervous", "Lymphatic"],
    answer: [1],
    rationale: "Autoimmunity is driven by a malfunction of the immune system, causing it to misidentify host cellular components as foreign threats."
  },
  {
    id: 139,
    type: "mcq",
    question: "autonomic dysreflexia: Reaction that may occur in clients with spinal cord injury above ____.",
    options: ["T2", "T4", "T6", "T10"],
    answer: [2],
    rationale: "Autonomic dysreflexia is a life-threatening syndrome that can occur in individuals with a spinal cord injury at or above the T6 level, where intact sympathetic responses below the injury trigger uncoordinated, massive systemic vasoconstriction."
  },
  {
    id: 140,
    type: "mcq",
    question: "autonomic dysreflexia: Dysreflexia results in profuse diaphoresis, pounding headache, blurred vision, and dramatically elevated ____ ____.",
    options: ["Heart rate", "Blood pressure", "Core temperature", "Respiratory rate"],
    answer: [1],
    rationale: "Unchecked sympathetic activity below the spinal injury triggers widespread arterial narrowing, causing severe, paroxysmal blood pressure elevations that require rapid intervention."
  },
  {
    id: 141,
    type: "mcq",
    question: "autosomal recessive disorder: A ____ disorder involving two expressed abnormal autosomal genes where the affected individual receives one copy from each parent.",
    options: ["Congenital", "Genetic", "Chromosomal", "Acquired"],
    answer: [1],
    rationale: "Autosomal recessive conditions are classic genetic inheritance patterns requiring an individual to inherit mutated copies of a gene from both biological parents."
  },
  {
    id: 142,
    type: "mcq",
    question: "avascular necrosis: A disease where there is cell death of ____ components due to interruption of the blood supply.",
    options: ["Cartilage", "Bone", "Muscle", "Marrow"],
    answer: [1],
    rationale: "Avascular necrosis describes cellular ischemia and death within osseous bone tissue following the loss of localized arterial blood supply."
  },
  {
    id: 143,
    type: "mcq",
    question: "avascular necrosis: Caused by the sudden or chronic interruption of the ____ supply.",
    options: ["Nerve", "Blood", "Lymph", "Oxygen"],
    answer: [1],
    rationale: "The progressive destruction of bone architecture seen in avascular necrosis is caused directly by an interruption in blood supply."
  },
  {
    id: 144,
    type: "mcq",
    question: "AZT: In full ____, also called zidovudine, a drug used to delay development of AIDS.",
    options: ["Azidothymidine", "Acyclovir", "Azithromycin", "Atazanavir"],
    answer: [0],
    rationale: "AZT stands for Azidothymidine, historically the first antiretroviral drug approved to inhibit HIV replication and delay progression to AIDS."
  },
  {
    id: 145,
    type: "mcq",
    question: "AZT: AZT belongs to a group of drugs known as ____ reverse transcriptase inhibitors (NRTIs).",
    options: ["Non-nucleoside", "Nucleoside", "Protease", "Integrase"],
    answer: [1],
    rationale: "Zidovudine (AZT) functions as a Nucleoside Reverse Transcriptase Inhibitor (NRTI), acting as a faulty structural building block to halt viral DNA chain synthesis."
  },
  {
    id: 146,
    type: "mcq",
    question: "bacterial meningitis: Inflammation of the ____ of the brain and spinal cord caused by bacteria.",
    options: ["Ventricles", "Meninges", "Neurons", "Glia"],
    answer: [1],
    rationale: "Bacterial meningitis is an acute, life-threatening bacterial infection localized to the meninges, the protective membrane layers enveloping the central nervous system."
  },
  {
    id: 147,
    type: "mcq",
    question: "basal cell carcinoma: A malignant ____ cancer; it is the most common form of cancer and rarely metastasizes.",
    options: ["Bone", "Skin", "Blood", "Glandular"],
    answer: [1],
    rationale: "Basal cell carcinoma originates in the basal layer of the epidermis, making it the most frequently diagnosed form of human skin cancer."
  },
  {
    id: 148,
    type: "mcq",
    question: "Battle's sign: Discoloration of the skin behind the ____ after the fracture of a bone in the lower skull.",
    options: ["Eye", "Ear", "Neck", "Jaw"],
    answer: [1],
    rationale: "Battle's sign presents as ecchymosis over the mastoid process behind the ear, serving as a classic clinical indicator of a basilar skull fracture."
  },
  {
    id: 149,
    type: "mcq",
    question: "benign prostate hyperplasia: An increase in the size of the ____ that leads to urethral compression and structural obstruction.",
    options: ["Bladder", "Prostate", "Testicle", "Kidney"],
    answer: [1],
    rationale: "Benign Prostatic Hyperplasia (BPH) is a non-malignant enlargement of the prostate gland that constricts the prostatic urethra, causing lower urinary tract symptoms."
  },
  {
    id: 150,
    type: "mcq",
    question: "bilirubin: The yellow breakdown product of normal ____ catabolism.",
    options: ["Globin", "Heme", "Plasma", "Biliverdin"],
    answer: [1],
    rationale: "Bilirubin is generated as an end product during the metabolic breakdown and recycling of the iron-binding heme ring structure found in aging red blood cells."
  },
  {
    id: 151,
    type: "mcq",
    question: "bilirubin: ____ is found in hemoglobin, a principal component of red blood cells.",
    options: ["Iron", "Heme", "Biliverdin", "Porphyrin"],
    answer: [1],
    rationale: "Hemoglobin molecules are composed of globin protein chains wrapped around four oxygen-binding, iron-containing heme complexes."
  },
  {
    id: 152,
    type: "mcq",
    question: "bilirubin: It is responsible for the ____ color of bruises and the background discoloration in jaundice.",
    options: ["Red", "Yellow", "Green", "Purple"],
    answer: [1],
    rationale: "Elevated levels of free or conjugated bilirubin in the extracellular tissues impart the characteristic yellow pigmentation seen in clinical jaundice."
  },
  {
    id: 153,
    type: "mcq",
    question: "biophysical profile: A prenatal ultrasound evaluation of ____ well-being involving a scoring system.",
    options: ["Maternal", "Fetal", "Placental", "Amniotic"],
    answer: [1],
    rationale: "A biophysical profile combines fetal ultrasound parameters with a non-stress test to assess dynamic indicators of fetal health and identify potential in-utero hypoxia."
  },
  {
    id: 154,
    type: "mcq",
    question: "biophysical profile: Features a multi-category scoring system termed ____ score.",
    options: ["Apgar", "Manning's", "Bishop", "Glasgow"],
    answer: [1],
    rationale: "The standard biophysical profile scoring system was formally established and named after clinical investigator Manning."
  },
  {
    id: 155,
    type: "mcq",
    question: "bipolar disorder: A mood disorder characterized by major ____ and full manic episodes.",
    options: ["Anxiety", "Depression", "Psychosis", "Paranoia"],
    answer: [1],
    rationale: "Bipolar I disorder is defined by cyclical shifts between major depressive episodes and periods of abnormally elevated mood (mania)."
  },
  {
    id: 156,
    type: "mcq",
    question: "bipolar disorder: Characterized by alternating cycles of major depressive and full ____ episodes.",
    options: ["Hypomanic", "Manic", "Catatonic", "Dysthymic"],
    answer: [1],
    rationale: "The hallmark feature of traditional Bipolar I clinical presentations is the distinct emergence of fully developed manic episodes."
  },
  {
    id: 157,
    type: "mcq",
    question: "body surface area: Means for calculating pediatric drug dosage using a specialized chart layout called a ____.",
    options: ["Histogram", "Nomogram", "Metric scale", "Growth grid"],
    answer: [1],
    rationale: "A West nomogram is a specialized multi-variable chart axis used to estimate an individual's body surface area from height and weight coordinates for precise medication dosing."
  },
  {
    id: 158,
    type: "mcq",
    question: "borderline personality disorder: A disorder characterized by ____ relationships, self-damaging impulsiveness, and chronic feelings of emptiness.",
    options: ["Dependent", "Unstable", "Avoidant", "Rigid"],
    answer: [1],
    rationale: "Borderline personality disorder is characterized by a pattern of severe instability in interpersonal relationships, fluctuating between intense idealization and devaluation."
  },
  {
    id: 159,
    type: "mcq",
    question: "bradyarrhythmias: Irregularity in ____ rate or rhythm characterized by slowness.",
    options: ["Respiratory", "Heart", "Metabolic", "Pulse"],
    answer: [1],
    rationale: "The prefix 'brady-' paired with '-arrhythmia' identifies an abnormally slow electrical conduction configuration within the heart."
  },
  {
    id: 160,
    type: "mcq",
    question: "bradycardia: A ____ but steady heartbeat at a rate of less than 60 beats per minute.",
    options: ["Rapid", "Slow", "Irregular", "Bounding"],
    answer: [1],
    rationale: "Bradycardia is defined as a slow, regular heart rate that falls below standard physiological resting parameters."
  },
  {
    id: 161,
    type: "mcq",
    question: "bradycardia: A slow but steady heartbeat at a rate of less than ____ beats per minute.",
    options: ["50", "60", "70", "80"],
    answer: [1],
    rationale: "The standard clinical threshold for declaring adult bradycardia is a resting heart rate drops below 60 beats per minute."
  },
  {
    id: 162,
    type: "mcq",
    question: "____ ____ contraction: Light, painless, irregular uterine tightening during pregnancy, arising during the first trimester.",
    options: ["Braxton Hicks", "True labor", "Montgomery", "Hegar sign"],
    answer: [0],
    rationale: "Braxton Hicks contractions are sporadic, physiological uterine contractions that occur throughout pregnancy, serving as practice tightening rather than active cervical dilating labor."
  },
  {
    id: 163,
    type: "mcq",
    question: "Braxton Hicks contraction: Also called false ____.",
    options: ["Pregnancy", "Labor", "Ovulation", "Contraction"],
    answer: [1],
    rationale: "Because Braxton Hicks contractions do not cause cervical effacement or progressive dilation, they are commonly termed false labor."
  },
  {
    id: 164,
    type: "mcq",
    question: "breast engorgement: Distention of the milk ____ and surrounding tissue as breast milk is formed.",
    options: ["Glands", "Ducts", "Lobules", "Sinuses"],
    answer: [1],
    rationale: "Postpartum breast engorgement is caused by vascular congestion and accumulation of milk within the mammary duct network during the onset of lactation."
  },
  {
    id: 165,
    type: "mcq",
    question: "bronchiectasis: It is classified as an ____ lung disease, along with emphysema, bronchitis, and asthma.",
    options: ["Restrictive", "Obstructive", "Infectious", "Interstitial"],
    answer: [1],
    rationale: "Bronchiectasis involves permanent airway dilation that impairs mucus clearance, leading to airflow limitation and its classification as an obstructive lung disease."
  },
  {
    id: 166,
    type: "mcq",
    question: "bronchiolitis: A lung inflammation mainly in infants, also called ____.",
    options: ["Lobar pneumonia", "Bronchopneumonia", "Pleurisy", "Atelectasis"],
    answer: [1],
    rationale: "Bronchiolitis involves widespread acute inflammation of the smaller airways, presenting with clinical patterns that overlap with acute bronchopneumonia."
  },
  {
    id: 167,
    type: "mcq",
    question: "bronchoscopy: Visual examination of the ____ tree using a specialized flexible or rigid scope.",
    options: ["Gastrointestinal", "Tracheobronchial", "Nasopharyngeal", "Esophageal"],
    answer: [1],
    rationale: "A bronchoscopy allows direct endoscopic visualization of the larynx, trachea, and branching bronchial branches for diagnostic or therapeutic access."
  },
  {
    id: 168,
    type: "mcq",
    question: "____ catheter: Single-lumen silicone central venous catheter used for long-term venous access.",
    options: ["Hickman", "Broviac", "Groshong", "Picc"],
    answer: [1],
    rationale: "The Broviac catheter is a tunneled central venous access device similar to a Hickman line but features a smaller lumen size, making it well-suited for pediatric patients."
  },
  {
    id: 169,
    type: "mcq",
    question: "____ sign: Flexion of the hips and knees in response to passive flexion of the neck.",
    options: ["Kernig's", "Brudzinski's", "Babinski's", "Chvostek's"],
    answer: [1],
    rationale: "Brudzinski's sign is a classic clinical marker of meningeal irritation, where passive neck flexion triggers involuntary hip and knee flexion due to meningeal stretching."
  },
  {
    id: 170,
    type: "mcq",
    question: "Brudzinski's sign: ____ of the hips and knees in response to passive flexion of the neck.",
    options: ["Extension", "Flexion", "Abduction", "Rotation"],
    answer: [1],
    rationale: "The physical presentation evaluated in a positive Brudzinski's test is the involuntary flexion drawing upward of the lower limbs."
  },
  {
    id: 171,
    type: "mcq",
    question: "bruit: An abnormal vascular ____ sound heard on auscultation as a result of turbulent blood flow.",
    options: ["Clicking", "Swishing", "Rubbing", "Galloping"],
    answer: [1],
    rationale: "A vascular bruit creates a characteristic blowing or swishing sound when arterial narrowing or irregularities trigger turbulent blood flow."
  },
  {
    id: 172,
    type: "mcq",
    question: "buccal: Of or relating to the inside of the ____.",
    options: ["Lip", "Cheek", "Tongue", "Palate"],
    answer: [1],
    rationale: "The term 'buccal' originates from anatomical terminology referring directly to the internal mucosal surface of the cheek."
  },
  {
    id: 173,
    type: "mcq",
    question: "Buerger’s disease: A progressive inflammation and thrombosis strongly associated with use of ____ products.",
    options: ["Alcohol", "Tobacco", "Narcotic", "Steroid"],
    answer: [1],
    rationale: "Buerger's disease (thromboangiitis obliterans) is a non-atherosclerotic inflammatory vasculitis closely linked to the consumption and exposure of tobacco products."
  },
  {
    id: 174,
    type: "mcq",
    question: "Buerger’s disease: Primarily caused or exacerbated by tobacco ____.",
    options: ["Chewing", "Smoking", "Vaping", "Patching"],
    answer: [1],
    rationale: "The onset and progression of Buerger's disease are driven by tobacco smoke inhalation, and strict smoking cessation is the primary intervention to prevent tissue necrosis."
  },
  {
    id: 175,
    type: "mcq",
    question: "bulimia: An ____ disorder characterized by episodes of binge eating followed by self-induced purging.",
    options: ["Anxiety", "Eating", "Impulse", "Personality"],
    answer: [1],
    rationale: "Bulimia nervosa is an eating disorder characterized by recurrent episodes of out-of-control binge eating followed by compensatory behaviors like self-induced vomiting."
  },
  {
    id: 176,
    type: "mcq",
    question: "bulimia: Characterized by episodes of ____ eating that may end in self-induced vomiting.",
    options: ["Restrictive", "Binge", "Selective", "Absentee"],
    answer: [1],
    rationale: "The hallmark cycle of bulimia hinges upon episodes of excessive, high-calorie binge eating before triggering compensatory clearing behaviors."
  },
  {
    id: 177,
    type: "mcq",
    question: "CAD: Coronary ____ ____ (CAD) is the most common type of heart disease.",
    options: ["Artery Disease", "Aortic Defect", "Atrial Dysfunction", "Cardiovascular Disorder"],
    answer: [0],
    rationale: "The medical acronym CAD stands for Coronary Artery Disease, which describes pathology impacting the arterial blood supply delivering oxygen directly to the myocardium."
  },
  {
    id: 178,
    type: "mcq",
    question: "CAD: It happens when the arteries that supply blood to heart muscle become hardened and ____.",
    options: ["Dilated", "Narrowed", "Lengthened", "Ruptured"],
    answer: [1],
    rationale: "Atherosclerosis causes the progressive narrowing of vessel lumens, which restricts downstream arterial blood flow."
  },
  {
    id: 179,
    type: "mcq",
    question: "CAD: The building up of cholesterol plaque on inner arterial walls is called ____.",
    options: ["Arteriosclerosis", "Atherosclerosis", "Thromboemphlebitis", "Arteritis"],
    answer: [1],
    rationale: "Atherosclerosis is the specific fibrofatty thickening and plaque deposition occurring within the endothelial intima layer of large and medium-sized arteries."
  },
  {
    id: 180,
    type: "mcq",
    question: "candidiasis: A fungal infection of any of the Candida species, of which ____ ____ is the most common.",
    options: ["Candida tropicalis", "Candida albicans", "Candida glabrata", "Candida krusei"],
    answer: [1],
    rationale: "Candida albicans is the primary opportunistic diploid fungus responsible for most human candidiasis infections (such as thrush and vaginitis)."
  },
  {
    id: 181,
    type: "mcq",
    question: "candidiasis: Commonly referred to as a ____ infection.",
    options: ["Bacterial", "Yeast", "Viral", "Protozoan"],
    answer: [1],
    rationale: "Candida species are unicellular fungi, meaning that candidiasis infections are commonly referred to as yeast infections."
  },
  {
    id: 182,
    type: "mcq",
    question: "____ ____: A diagnostic procedure in which a catheter is inserted into a large peripheral vessel and threaded to the heart.",
    options: ["Angioplasty stenting", "Cardiac catheterization", "Echocardiogram study", "Venous mapping"],
    answer: [1],
    rationale: "Cardiac catheterization is an invasive diagnostic procedure where flexible catheters are guided through the arterial or venous system into the cardiac chambers and coronary arteries."
  },
  {
    id: 183,
    type: "mcq",
    question: "cardiac output: The volume of blood ejected by the heart per minute, normally ranging from ____ to eight L.",
    options: ["Two", "Four", "Six", "Five"],
    answer: [1],
    rationale: "In an average healthy adult resting state, the baseline cardiac output ranges from approximately 4 to 8 liters of blood pumped per minute."
  },
  {
    id: 184,
    type: "mcq",
    question: "cardiac output: Normally ranges from four to ____ L per minute.",
    options: ["Six", "Eight", "Ten", "Twelve"],
    answer: [1],
    rationale: "The upper limit of a normal, resting adult cardiac output range is typically defined at 8 liters per minute."
  },
  {
    id: 185,
    type: "mcq",
    question: "cardiac tamponade: Also known as ____ tamponade, an acute effusion where fluid limits heart pumping capacity.",
    options: ["Myocardial", "Pericardial", "Endocardial", "Pleural"],
    answer: [1],
    rationale: "Because the fluid collecting during a tamponade event resides specifically inside the external fibroserous pericardial sac, it is referred to as pericardial tamponade."
  },
  {
    id: 186,
    type: "mcq",
    question: "cardiac tamponade: Fluid accumulates abnormally inside the ____ sac.",
    options: ["Pleural", "Pericardium", "Peritoneum", "Mediastinum"],
    answer: [1],
    rationale: "Fluid accumulation within the tight, non-compliant pericardium raises intrapericardial pressure, which compresses the heart chambers and prevents normal diastolic filling."
  },
  {
    id: 187,
    type: "mcq",
    question: "____ shock: A condition of low cardiac output that results from heart pump failure.",
    options: ["Hypovolemic", "Cardiogenic", "Anaphylactic", "Neurogenic"],
    answer: [1],
    rationale: "Cardiogenic shock occurs when severe impairment of myocardial contractility results in primary pump failure and life-threatening systemic hypoperfusion."
  },
  {
    id: 188,
    type: "mcq",
    question: "cardiomyopathy: Primary noninflammatory disease of the ____.",
    options: ["Pericardium", "Myocardium", "Endocadium", "Epicardium"],
    answer: [1],
    rationale: "Cardiomyopathies are a diverse group of diseases primarily affecting the structural integrity and electrical performance of the heart muscle (myocardium)."
  },
  {
    id: 189,
    type: "mcq",
    question: "cardioversion: ____ electrical cardioversion uses a therapeutic dose of electric current delivered at a specific moment in the cardiac cycle.",
    options: ["Unsynchronized", "Synchronized", "Automated", "High-frequency"],
    answer: [1],
    rationale: "Synchronized cardioversion times the electrical shock to line up with the R-wave of the QRS complex, avoiding delivery during the vulnerable T-wave repolarization window to prevent ventricular fibrillation."
  },
  {
    id: 190,
    type: "mcq",
    question: "carpal tunnel syndrome: Compression neuropathy caused by tissue pressure over the ____ nerve running through the wrist tunnel.",
    options: ["Ulnar", "Median", "Radial", "Axillary"],
    answer: [1],
    rationale: "Carpal tunnel syndrome is caused by increased pressure within the carpal canal that compresses the median nerve, leading to paresthesia and pain in its sensory distribution."
  },
  {
    id: 191,
    type: "mcq",
    question: "cataracts: A cloudiness or opacity in the normally transparent crystalline ____ of the eye.",
    options: ["Cornea", "Lens", "Sclera", "Vitreous"],
    answer: [1],
    rationale: "A cataract is a progressive metabolic breakdown that alters proteins within the lens structure, causing opacification that blocks normal light transmission to the retina."
  },
  {
    id: 192,
    type: "mcq",
    question: "catatonic: A stuporous or unresponsive psychiatric state commonly characterized by an inability to ____ or talk.",
    options: ["See", "Move", "Breathe", "Swallow"],
    answer: [1],
    rationale: "Catatonic stupor presents with marked psychomotor slowing, often resulting in complete immobility, mutism, and resistance to environmental positioning."
  },
  {
    id: 193,
    type: "mcq",
    question: "catecholamine: Any of a group of chemical compounds having a ____ action mimicking sympathetic nervous inputs.",
    options: ["Parasympatholytic", "Sympathomimetic", "Parasympathomimetic", "Adrenergic blocker"],
    answer: [1],
    rationale: "Endogenous catecholamines (like epinephrine and norepinephrine) act as primary chemical triggers for fight-or-flight signaling, making their actions sympathomimetic."
  },
  {
    id: 194,
    type: "mcq",
    question: "celiac disease: A chronic disease in which an individual can’t tolerate foods containing ____ or wheat protein.",
    options: ["Lactose", "Gluten", "Glucose", "Fructose"],
    answer: [1],
    rationale: "Celiac disease is an autoimmune enteropathy triggered by consuming gluten, a protein composite found in wheat, barley, and rye, which drives immune-mediated destruction of the small intestinal villi."
  },
  {
    id: 195,
    type: "mcq",
    question: "cellulitis: An infection of deep ____ tissue and sometimes muscle characterized by local heat, pain, redness, and swelling.",
    options: ["Epicutaneous", "Subcutaneous", "Intradermal", "Fascial"],
    answer: [1],
    rationale: "Cellulitis is an acute bacterial infection that spreads rapidly through the deep subcutaneous and dermal layers of the skin."
  },
  {
    id: 196,
    type: "mcq",
    question: "cerebral aneurysm: A saclike dilation of the wall of a ____ artery, typically resulting from structural weakness.",
    options: ["Carotid", "Cerebral", "Vertebral", "Basilar"],
    answer: [1],
    rationale: "A cerebral aneurysm specifically identifies an abnormal vascular dilation located within the arterial structures supplying the brain."
  },
  {
    id: 197,
    type: "mcq",
    question: "cerebral aneurysm: A cerebral, or berry, aneurysm usually occurs in the circle of ____.",
    options: ["Willis", "Monro", "Sylvius", "Wernicke"],
    answer: [0],
    rationale: "Berry aneurysms develop most frequently at structural branching junctions within the Circle of Willis, an arterial ring structure at the base of the brain."
  },
  {
    id: 198,
    type: "mcq",
    question: "cerebral contusion: A bruising of the ____ tissue as a result of a severe blow to the head.",
    options: ["Meningeal", "Brain", "Cranial", "Scalp"],
    answer: [1],
    rationale: "A cerebral contusion describes localized structural bruising and parenchymal hemorrhage within the brain tissue itself, often following a traumatic impact."
  },
  {
    id: 199,
    type: "mcq",
    question: "cerebral palsy: A permanent disorder of ____ function resulting from nonprogressive brain damage or a brain lesion.",
    options: ["Cognitive", "Motor", "Sensory", "Behavioral"],
    answer: [1],
    rationale: "Cerebral palsy encompasses a group of permanent, non-progressive neurodevelopmental disorders that impair movement, posture, and motor coordination."
  },
  {
    id: 200,
    type: "mcq",
    question: "chelation therapy: Administration of agents that bind to ____ to aid in their removal from the body.",
    options: ["Toxins", "Metals", "Lipids", "Crystals"],
    answer: [1],
    rationale: "Chelating agents carry chemical configurations that bind to heavy metals, forming soluble complexes that can be cleared and excreted by the kidneys."
  },
  {
    id: 201,
    type: "mcq",
    question: "chelation therapy: Administered to aid in the removal of excess metals, such as ____ or iron in the body.",
    options: ["Calcium", "Lead", "Mercury", "Copper"],
    answer: [1],
    rationale: "Chelation therapy is a primary clinical intervention used to treat severe heavy metal poisoning, such as toxic lead accumulation."
  },
  {
    id: 202,
    type: "mcq",
    question: "chemotherapy: Treatment of a disease using chemicals that exert a toxic effect on the pathogen or abnormal ____ growth.",
    options: ["Tissue", "Cell", "Organ", "Systemic"],
    answer: [1],
    rationale: "Chemotherapeutic agents target active mechanisms of cell division to halt or kill rapidly proliferating malignant cell lines."
  },
    {
  id: 203,
  type: "mcq",
  question: "The emergency department nurse receives four clients simultaneously. Which client should the nurse triage to be seen FIRST?",
  options: [
  "A 22-year-old client with a history of asthma reporting a sore throat and a barking cough.",
  "A 45-year-old client with diaphoresis reporting crushing substernal chest pain radiating to the left arm.",
  "A 68-year-old client with chronic obstructive pulmonary disease (COPD) whose oxygen saturation is 89% on room air.",
  "A 34-year-old client with a deep 3-cm laceration to the forearm that is oozing dark red blood."
  ],
  answer: [1],
  rationale: "Crushing substernal chest pain radiating to the left arm accompanied by diaphoresis indicates a high probability of an acute myocardial infarction, which demands immediate diagnostic workup and intervention to prevent myocardial necrosis. Using the airway, breathing, and circulation framework, this hemodynamic emergency takes priority over an asthma history with an upper respiratory presentation without stridor, chronic hypoxia common in stable COPD clients, and non-arterial venous bleeding."
  },
  {
  id: 204,
  type: "sata",
  question: "A nurse is preparing a care plan for a client placed on neutropenic precautions following chemotherapy. Which interventions should the nurse include? Select all that apply.",
  options: [
  "Ensure the client's room is equipped with positive-pressure airflow.",
  "Remove all fresh flowers, potted plants, and raw fruits/vegetables from the room.",
  "Take the client's temperature every 4 hours and report any reading above 100.4°F (38°C).",
  "Permit family members to visit if they wear a standard surgical mask.",
  "Keep a dedicated stethoscope and blood pressure cuff in the client's room.",
  "Instruct the client to use a soft-bristled toothbrush for oral hygiene."
  ],
  answer: [0, 1, 2, 4, 5],
  rationale: "Severe neutropenia dangerously elevates infection risks. Positive-pressure isolation rooms protect immunocompromised hosts from outside pathogens. Fresh plants, soil, and uncooked vegetation introduce hazardous fungal spores and bacteria. Frequent temperature monitoring catches neutropenic fever, which is a medical emergency. Dedicated bedside equipment minimizes cross-contamination, and soft toothbrushes prevent mucosal micro-tears. Ill visitors must be barred entirely rather than simply masked."
  },
  {
  id: 205,
  type: "mcq",
  question: "A client with a deep vein thrombosis (DVT) is receiving a continuous intravenous heparin infusion. The current laboratory results indicate an activated partial thromboplastin time (aPTT) of 110 seconds. The hospital's therapeutic target range is 60 to 80 seconds. Which action should the nurse take FIRST?",
  options: [
  "Stop the heparin infusion immediately and prepare to administer protamine sulfate.",
  "Decrease the heparin infusion rate according to the hospital's titration protocol.",
  "Hold the heparin infusion for 1 hour and request a repeat aPTT draw.",
  "Stop the infusion, assess the client for signs of bleeding, and notify the health care provider."
  ],
  answer: [3],
  rationale: "An aPTT of 110 seconds significantly exceeds the upper limits of safety, presenting an immediate threat of hemorrhage. The nurse must halt the infusion to stop further anticoagulation, perform a rapid head-to-toe assessment for signs of internal or external bleeding, and notify the prescriber. Protamine sulfate is reserved for severe bleeding emergencies, and simple titration changes are unsafe without provider awareness and a formal pause."
  },
  {
  id: 206,
  type: "mcq",
  question: "A nurse is monitoring a client in active labor who is receiving an oxytocin infusion. The nurse notes late decelerations on the electronic fetal monitoring strip. Which action should the nurse perform FIRST?",
  options: [
  "Administer oxygen at 8 to 10 L/min via a non-rebreather face mask.",
  "Turn the client onto their left side to improve placental perfusion.",
  "Discontinue the oxytocin infusion immediately.",
  "Increase the rate of the maintenance intravenous fluids."
  ],
  answer: [2],
  rationale: "Late decelerations are triggered by uteroplacental insufficiency, often worsened by uterine tachysystole from exogenous oxytocin. The immediate priority is to stop the medication driving the contractions to reduce uterine hyperstimulation. While repositioning the client, providing oxygen, and increasing IV fluids are necessary components of intrauterine resuscitation, stopping the oxytocin infusion removes the primary offending variable and must happen first."
  },
  {
  id: 207,
  type: "mcq",
  question: "A nurse enters the room of a client diagnosed with major depressive disorder. The client is staring out the window and says, 'There is no point in trying anymore. Everyone would be better off without me.' Which response by the nurse is MOST therapeutic?",
  options: [
  "'You have so much to live for. Your family loves you very much.'",
  "'Are you saying that you are thinking about hurting or killing yourself?'",
  "'Why do you feel that way? Yesterday you seemed to be doing much better.'",
  "'Don't worry, things will start looking up once your medication kicks in.'"
  ],
  answer: [1],
  rationale: "When a client expresses feelings of worthlessness and implicit suicidal ideation, the nurse must respond with direct, clear, and unambiguous language to evaluate safety. Asking specifically about suicidal intent provides an objective opening for the client to share their state of mind. Responses that rely on false reassurance, minimization, or demanding a defense ('why') invalidate the client's pain and close off communication."
  },
  {
  id: 208,
  type: "mcq",
  question: "A client with type 1 diabetes mellitus is admitted to the intensive care unit with Diabetic Ketoacidosis (DKA). The client’s blood glucose is 450 mg/dL, and an intravenous insulin infusion is running. The client's repeat blood glucose level is now 240 mg/dL. Which prescription should the nurse expect from the health care provider?",
  options: [
  "Discontinue the insulin infusion and switch to scheduled subcutaneous sliding-scale insulin.",
  "Change the intravenous maintenance fluid to a solution containing 5% dextrose.",
  "Increase the rate of the continuous insulin infusion to clear the remaining blood ketones.",
  "Administer a rapid-acting insulin bolus intravenously."
  ],
  answer: [1],
  rationale: "In managing DKA, when blood glucose concentrations fall below 250 mg/dL, dextrose must be added to the maintenance IV fluids. This prevents profound hypoglycemia and a rapid drop in serum osmolality that could lead to cerebral edema. The continuous insulin infusion must be maintained, not stopped, to suppress ketogenesis until the anion gap normalizes and metabolic acidosis resolves completely."
  },
  {
  id: 209,
  type: "sata",
  question: "A registered nurse (RN) is planning the daily care assignments on a neurological step-down unit. Which tasks can be safely delegated to an experienced Licensed Practical/Vocational Nurse (LPN/LVN)? Select all that apply.",
  options: [
  "Administering scheduled subcutaneous heparin to a client recovering from an ischemic stroke.",
  "Performing the initial neurological assessment on a client just admitted from the emergency department.",
  "Providing discharge teaching regarding warning signs of increased intracranial pressure to a client's family.",
  "Monitoring the hourly chest tube drainage volume for a client following a spinal fusion.",
  "Titrating an intravenous sodium nitroprusside infusion for a client in a hypertensive crisis.",
  "Suctioning an established tracheostomy tube for a client with amyotrophic lateral sclerosis (ALS)."
  ],
  answer: [0, 3, 5],
  rationale: "Licensed Practical Nurses operate under a scope that permits the administration of routine medications via common routes, monitoring established physiological drains, and executing standardized technical procedures like tracheostomy suctioning. Initial diagnostic clinical assessments, complex discharge education plans, and the titration of continuous high-alert vasoactive medications require advanced clinical reasoning and remain the sole responsibility of the RN."
  },
  {
  id: 210,
  type: "mcq",
  question: "The nurse is assessing a 9-month-old infant during a routine well-child visit. Which developmental milestone should the nurse expect the infant to have achieved?",
  options: [
  "Building a tower of two blocks.",
  "Walking independently without support.",
  "Sitting up steadily without support.",
  "Saying three to five meaningful words."
  ],
  answer: [2],
  rationale: "An infant should sit steadily without physical support between 6 and 8 months of age, making it an expected finding by 9 months. Advanced fine motor skills like stacking blocks, gross motor independence like unsupported walking, and expressive language skills involving multiple meaningful words are milestones typically seen between 12 and 15 months of age."
  },
  {
  id: 211,
  type: "mcq",
  question: "A client who underwent a percutaneous coronary intervention (PCI) via the right femoral artery 2 hours ago reports sudden, severe lower back pain. The nurse notes the client's blood pressure has dropped from 122/74 mmHg to 90/52 mmHg, and the heart rate has increased to 112 bpm. Which complication should the nurse suspect FIRST?",
  options: [
  "Acute myocardial infarction.",
  "Retroperitoneal hemorrhage.",
  "Arteriovenous fistula formation.",
  "Pulmonary embolism."
  ],
  answer: [1],
  rationale: "Sudden, severe back pain paired with profound hypotension and tachycardia shortly after a femoral artery access procedure signals an occult retroperitoneal hemorrhage. Blood accumulates in the retroperitoneal space from the arterial puncture site, inducing hypovolemic shock. Myocardial infarction presents as chest pain, and a pulmonary embolism causes respiratory distress, neither explaining the acute back pain and rapid blood loss profile."
  },
  {
  id: 212,
  type: "sata",
  question: "A nurse is providing discharge education to a client prescribed Lithium carbonate for bipolar disorder. Which statements by the client indicate a correct understanding of the teaching? Select all that apply.",
  options: [
  "'I need to significantly restrict my daily salt intake to keep the drug working.'",
  "'I will call my doctor immediately if I experience persistent diarrhea or vomiting.'",
  "'I should drink between 2 to 3 liters of water every single day.'",
  "'I will need to get my blood drawn regularly to check my medication levels.'",
  "'I can stop taking this medication as soon as my mood feels completely stable.'",
  "'It is completely fine to take ibuprofen if I develop a mild headache.'"
  ],
  answer: [1, 2, 3],
  rationale: "Lithium has a narrow therapeutic index and is heavily influenced by fluid and electrolyte balance. Maintaining an adequate intake of fluids and consistent sodium levels prevents toxicity; lowering dietary salt causes the kidneys to retain lithium, leading to dangerous serum spikes. Gastrointestinal fluid losses accelerate this risk. Regular lab testing is necessary, and over-the-counter NSAIDs are avoided because they reduce lithium clearance."
  },
  {
  id: 213,
  type: "mcq",
  question: "A nurse is caring for a client with a left-sided chest tube connected to a water-seal drainage system. While assisting the client up to the chair, the chest tube becomes accidentally disconnected from the drainage collection system. Which action should the nurse take IMMEDIATELY?",
  options: [
  "Clamp the chest tube close to the client's chest using padded hemostats.",
  "Apply a sterile occlusive petroleum gauze dressing over the insertion site.",
  "Submerge the distal end of the chest tube in a bottle of sterile water.",
  "Instruct the client to perform the Valsalva maneuver while holding their breath."
  ],
  answer: [2],
  rationale: "When a chest tube separates from its drainage system, submersing the exposed distal tip into a bottle of sterile water establishes a temporary underwater seal. This prevent atmospheric air from migrating up the tubing into the pleural space, protecting the client from a tension pneumothorax. Clamping the tube is avoided as it traps air within the pleural cavity, while an occlusive dressing is only used if the tube is pulled completely out of the chest wall."
  },
  {
  id: 214,
  type: "mcq",
  question: "A 3-year-old child is brought to the emergency department by the parents due to sudden high fever, severe sore throat, and difficulty breathing. The nurse observes the child sitting upright, leaning forward with the chin thrust out, and drooling. Which intervention is counterindicated for this client?",
  options: [
  "Preparing for immediate endotracheal intubation or tracheostomy.",
  "Assessing the child's throat using a sterile tongue depressor.",
  "Administering humidified blow-by oxygen as tolerated.",
  "Keeping the child as calm and quiet as possible on the parent's lap."
  ],
  answer: [1],
  rationale: "The presentation of high fever, respiratory distress, a tripod position, and drooling strongly points to acute epiglottitis. Visual examination or invasive manipulation of the pharynx using a tongue depressor or swab can precipitate sudden, total airway occlusion from laryngospasm. Airway security tools should be at the bedside, and the child must remain undisturbed to minimize emotional distress and hyperventilation."
  },
  {
  id: 215,
  type: "mcq",
  question: "Using Naegele’s Rule, what is the estimated date of delivery (EDD) for a pregnant client whose last menstrual period (LMP) began on October 14, 2025?",
  options: [
  "July 7, 2026",
  "July 21, 2026",
  "July 14, 2026",
  "August 21, 2026"
  ],
  answer: [1],
  rationale: "Naegele’s Rule computes the estimated date of delivery by tracking the first day of the last menstrual period, subtracting exactly 3 calendar months, and then adding 7 days. Subtracting 3 months from October 14 yields July 14. Advancing that date by 7 days brings the final calculation to July 21, 2026."
  },
  {
  id: 216,
  type: "sata",
  question: "A client is admitted to the orthopedic unit with a closed right femur fracture and is placed in Buck's traction pending surgery. Which nursing actions are appropriate? Select all that apply.",
  options: [
  "Ensure the traction weights hang freely off the floor at all times.",
  "Lift the weights manually when rearranging or pulling the client up in bed.",
  "Assess the skin integrity of the right leg and pedal pulses every 2 to 4 hours.",
  "Keep the affected leg abducted using a large pillow or wedge.",
  "Ensure the knots in the traction ropes do not touch the pulley wheels.",
  "Loosen or remove the traction boot if the client reports severe muscle spasms."
  ],
  answer: [0, 2, 4],
  rationale: "Buck's traction is a form of skin traction designed to immobilize a fractured limb and reduce muscle spasms. To maintain therapeutic alignment, traction weights must hang freely without touching the floor, and knots must clear the pulley housing. Frequent neurovascular and skin integrity checks are essential to monitor for pressure damage. Manually lifting weights interrupts the continuous traction force, and abduction wedges are specific to total hip arthroplasty."
  },
  {
  id: 217,
  type: "mcq",
  question: "A client diagnosed with schizophrenia states, 'The government has planted a microchip in my dental fillings to monitor my thoughts.' Which response by the nurse is MOST therapeutic?",
  options: [
  "'The government does not have the technology or permission to plant microchips in your teeth.'",
  "'I understand that you believe that is happening, but it sounds frightening to feel like your thoughts are being monitored.'",
  "'Let's talk about something else because discussing these thoughts will only make your delusions worse.'",
  "'Why do you think the government wants to monitor your thoughts specifically?'"
  ],
  answer: [1],
  rationale: "When addressing a paranoid delusion, the nurse should acknowledge and validate the underlying emotional reality—such as fear or anxiety—without reinforcing the false belief. Arguing against the delusion or attempting to apply logic is ineffective, while asking 'why' deepens the delusion. Dismissing the topic entirely shuts down the therapeutic relationship."
  },
  {
  id: 218,
  type: "mcq",
  question: "A nurse is reviewing the laboratory results for a client diagnosed with Chronic Kidney Disease (CKD) who missed their last hemodialysis session. Which laboratory value represents a critical priority that requires immediate intervention?",
  options: [
  "Serum creatinine of 5.8 mg/dL.",
  "Blood urea jacket (BUN) of 62 mg/dL.",
  "Serum potassium of 6.7 mEq/L.",
  "Hemoglobin of 9.2 g/dL."
  ],
  answer: [2],
  rationale: "A serum potassium level of 6.7 mEq/L represents severe hyperkalemia, which carries an immediate risk for lethal cardiac dysrhythmias or cardiac arrest. While elevated creatinine and BUN levels are expected findings in missed-dialysis CKD clients, and mild anemia is common from low erythropoietin production, stabilizing cardiac conduction makes hyperkalemia the highest priority."
  },
  {
  id: 219,
  type: "sata",
  question: "A client is prescribed an intravenous infusion of Vancomycin every 12 hours for a severe MRSA infection. Which actions should the nurse implement to ensure safe administration? Select all that apply.",
  options: [
  "Infuse the medication over a minimum of 60 minutes to prevent Red Man Syndrome.",
  "Monitor the client's blood urea nitrogen (BUN) and creatinine levels closely.",
  "Draw a trough blood level immediately before administering the next scheduled dose.",
  "Administer the medication via a rapid intravenous push if the client is stable.",
  "Assess the intravenous insertion site frequently for signs of phlebitis or extravasation.",
  "Restrict the client’s fluid intake during the entire course of therapy."
  ],
  answer: [0, 1, 2, 4],
  rationale: "Vancomycin administration requires close monitoring to maximize safety. Infusing the medication slowly over at least 60 minutes minimizes histamine release, which causes red man syndrome. The drug is nephrotoxic, requiring routine renal labs and trough concentration tracking to adjust dosages. It acts as a severe chemical irritant, requiring frequent assessment of the IV site. Rapid IV push is contraindicated."
  },
  {
  id: 220,
  type: "mcq",
  question: "A client with a history of cirrhosis of the liver is admitted with severe hematemesis. The nurse notes the client is disoriented, has a flapping tremor of the hands (asterixis), and a musty breath odor. Which medication should the nurse expect to administer to treat the client's cognitive changes?",
  options: [
  "Spironolactone",
  "Lactulose",
  "Propanolol",
  "Vitamin K"
  ],
  answer: [1],
  rationale: "The development of confusion, asterixis, and fetor hepaticus in a cirrhotic client indicates hepatic encephalopathy, caused by an accumulation of neurotoxic ammonia. Lactulose promotes the conversion of ammonia to ammonium in the colon, drawing it out of the bloodstream to be excreted in stool. Spironolactone manages ascites, and propranolol prevents variceal rebleeds, but neither lowers systemic ammonia concentrations."
  },
  {
  id: 221,
  type: "mcq",
  question: "The postpartum nurse assesses a client 2 hours after a vaginal delivery. The nurse notes the client's fundus is boggy, shifted to the right, and located 2 centimeters above the umbilicus. Which action should the nurse take FIRST?",
  options: [
  "Administer a prescribed intramuscular injection of methylergonovine.",
  "Perform deep, firm fundal massage until the uterus contracts.",
  "Assist the client to the bathroom to void.",
  "Increase the rate of the intravenous oxytocin infusion."
  ],
  answer: [2],
  rationale: "A uterine fundus that is soft, boggy, elevated, and displaced to the right side indicates a distended bladder. A full bladder mechanically prevents the uterine muscles from contracting efficiently, increasing postpartum hemorrhage risks. Resolving the bladder distension by having the client void allows the uterus to return to midline and contract naturally before resorting to pharmacologic interventions."
  },
  {
  id: 222,
  type: "mcq",
  question: "The nurse is assessing a 4-week-old infant brought to the clinic for a history of vomiting after every feeding. The parent describes the vomiting as projectile and notes the infant always seems hungry immediately afterward. Which physical finding should the nurse expect to find?",
  options: [
  "A sausage-shaped mass in the upper right quadrant of the abdomen.",
  "An olive-shaped mass in the epigastric region to the right of the umbilicus.",
  "A continuous machine-like murmur heard over the left infraclavicular area.",
  "A currant-jelly-like stool containing blood and mucus."
  ],
  answer: [1],
  rationale: "Persistent projectile vomiting after feedings combined with constant hunger in an infant points to hypertrophic pyloric stenosis. This condition is characterized by an olive-shaped mass palpable in the epigastrium just to the right of the umbilicus, representing the hypertrophied pyloric sphincter muscle. Sausage-shaped masses and bloody currant-jelly stools are hallmark indicators of intussusception."
  },
  {
  id: 223,
  type: "mcq",
  question: "A client with acute decompensated heart failure is admitted to the cardiac unit. The client is restless, has a respiratory rate of 28 breaths/min, and is coughing up pink, frothy sputum. Which oxygen delivery device should the nurse prioritize to manage this clinical emergency?",
  options: [
  "Nasal cannula at 4 L/min.",
  "Simple face mask at 8 L/min.",
  "Non-rebreather mask at 15 L/min.",
  "Venturi mask at 40% oxygen concentration."
  ],
  answer: [2],
  rationale: "Coughing up pink, frothy sputum along with severe tachypnea and anxiety indicates acute pulmonary edema secondary to decompensated heart failure. This situation demands immediate high-fraction oxygen delivery. A non-rebreather mask set to 15 L/min can supply oxygen concentrations between 60% and 90%, helping correct hypoxemia quickly while further pharmacological therapies take effect."
  },
  {
  id: 224,
  type: "sata",
  question: "A nurse is preparing to care for a client admitted with a suspected diagnosis of active pulmonary tuberculosis (TB). Which transmission-based precautions and interventions must the nurse implement? Select all that apply.",
  options: [
  "Assign the client to a private room with negative-pressure airflow.",
  "Wear an N95 respirator mask before entering the client's room.",
  "Place a surgical mask on the client if transport outside the room is necessary.",
  "Ensure all visitors wear a fluid-resistant gown and sterile gloves.",
  "Keep the room door closed tightly at all times.",
  "Limit client care to nurses who have a documented positive Mantoux skin test."
  ],
  answer: [0, 1, 2, 4],
  rationale: "Pulmonary tuberculosis is caused by an airborne pathogen, necessitating strict airborne precautions. This requires a negative-pressure isolation room to prevent air from escaping into shared hallways, keeping the door closed, and using an N95 respirator mask for healthcare workers. If transport is necessary, placing a standard surgical mask on the client helps trap infectious droplets. Gowns, gloves, and positive Mantoux histories are not standard airborne protocols."
  },
  {
  id: 225,
  type: "mcq",
  question: "A client with a history of chronic heart failure is prescribed oral Digoxin 0.125 mg daily. Prior to administering the medication, the nurse notes the client's apical pulse is 54 bpm, and the client reports new-onset nausea and blurred vision. Which action should the nurse take FIRST?",
  options: [
  "Administer the digoxin as prescribed and document the apical heart rate.",
  "Hold the digoxin and request a serum potassium and digoxin level draw.",
  "Administer an antiemetic medication and reassess the client in 1 hour.",
  "Document the client's heart rate as an expected variation of heart failure."
  ],
  answer: [1],
  rationale: "An apical pulse below 60 bpm along with gastrointestinal discomfort and visual alterations like blurred or yellow-green vision are classic signs of digoxin toxicity. The nurse must withhold the medication to avoid compounding the toxicity and check serum digoxin and potassium levels, as hypokalemia can exacerbate digoxin's toxic effects."
  },
  {
  id: 226,
  type: "mcq",
  question: "A nurse is performing an assessment on a client at 34 weeks gestation who presents with sudden-onset, severe, continuous abdominal pain and dark vaginal bleeding. The nurse notes the client's abdomen feels rigid and board-like upon palpation. Which condition should the nurse suspect FIRST?",
  options: [
  "Placenta previa.",
  "Ectopic pregnancy.",
  "Abruptio placentae.",
  "Cervical insufficiency."
  ],
  answer: [2],
  rationale: "The presentation of sudden, sharp, continuous abdominal pain, dark vaginal bleeding, and a rigid, board-like abdomen indicates abruptio placentae—the premature separation of the placenta from the uterine wall. In contrast, placenta previa causes painless, bright red bleeding, while ectopic pregnancies present much earlier in gestation."
  },
  {
  id: 227,
  type: "sata",
  question: "A client with a long history of chronic alcohol abuse is admitted to the medical unit for acute pancreatitis. The nurse should closely monitor the client for signs of acute alcohol withdrawal. Which clinical manifestations indicate early alcohol withdrawal? Select all that apply.",
  options: [
  "Coarse tremors of the hands.",
  "Severe auditory hallucinations.",
  "Tachycardia and elevated blood pressure.",
  "Profuse diaphoresis and anxiety.",
  "Bradycardia and somnolence.",
  "Tonic-clonic seizures."
  ],
  answer: [0, 2, 3],
  rationale: "Early signs of alcohol withdrawal typically emerge 6 to 24 hours after the last drink, reflecting central nervous system hyperactivity. Expected findings include coarse hand tremors, autonomic hyperarousal (tachycardia, hypertension, diaphoresis), and anxiety. Hallucinations and generalized tonic-clonic seizures represent more severe, delayed stages of withdrawal."
  },
  {
  id: 228,
  type: "mcq",
  question: "A mother brings her 2-year-old child to the clinic because she suspects the child swallowed an unknown quantity of liquid iron supplements 30 minutes ago. The child is currently alert and asymptomatic. Which intervention should the nurse expect to implement?",
  options: [
  "Administer 15 mL of syrup of ipecac to induce immediate vomiting.",
  "Assist with the administration of oral deferoxamine therapy.",
  "Prepare the child for emergency gastric lavage using standard saline.",
  "Administer activated charcoal to bind the iron in the gastrointestinal tract."
  ],
  answer: [1],
  rationale: "Deferoxamine is a specific chelating agent used to bind systemic iron and facilitate its excretion through the kidneys in cases of acute iron overdose. Inducing emesis with syrup of ipecac is outdated and risky, and activated charcoal is ineffective because it does not bind elemental metals like iron."
  },
  {
  id: 229,
  type: "mcq",
  question: "A client with a history of severe hyperthyroidism is admitted to the intensive care unit following an emergency appendectomy. The client is febrile (104.2°F/40.1°C), tachycardic (142 bpm), extremely agitated, and delirious. Which acute complication should the nurse identify?",
  options: [
  "Myxedema coma.",
  "Thyroid storm.",
  "Syndrome of Inappropriate Antidiuretic Hormone (SIADH).",
  "Diabetic Ketoacidosis (DKA)."
  ],
  answer: [1],
  rationale: "A thyroid storm is a rare, life-threatening hypermetabolic crisis triggered by physiological stressors like surgery or infection in clients with hyperthyroidism. It presents as hyperpyrexia, severe tachycardia, delirium, and extreme agitation. Myxedema coma is the extreme manifestation of severe hypothyroidism, presenting with hypothermia and bradycardia."
  },
  {
  id: 230,
  type: "sata",
  question: "A nurse is providing discharge dietary teaching to a client newly diagnosed with Celiac disease. Which food choices should the nurse instruct the client to avoid completely? Select all that apply.",
  options: [
  "Whole-wheat bread and pasta.",
  "Plain white rice and corn tortillas.",
  "Oatmeal processed in a facility that handles wheat.",
  "Barley soup and rye crackers.",
  "Fresh grilled chicken breast and steamed broccoli.",
  "Commercial beer and ale."
  ],
  answer: [0, 2, 3, 5],
  rationale: "Celiac disease requires a strict, lifelong avoidance of gluten proteins found in wheat, rye, and barley. Commercial beers and ales made from grain must be avoided, along with oats subject to cross-contamination in processing facilities. Pure rice, corn, and fresh meats or vegetables are naturally gluten-free and safe to consume."
  },
  {
  id: 231,
  type: "mcq",
  question: "A nurse is evaluating the 24-hour medical record of a client with Chronic Kidney Disease (CKD) undergoing peritoneal dialysis. The nurse notes the client infused 2,000 mL of dialysate solution, but only 1,400 mL was drained out. The client reports mild abdominal bloating but has stable vital signs. Which action should the nurse perform FIRST?",
  options: [
  "Notify the health care provider immediately of a potential peritonitis infection.",
  "Check the dialysis tubing for kinks and assist the client to turn from side to side.",
  "Advance the peritoneal catheter 2 to 3 cm deeper into the peritoneal cavity.",
  "Instill an additional 500 mL of dialysate solution to flush the catheter line."
  ],
  answer: [1],
  rationale: "When the fluid return volume is less than the infused dialysate volume during peritoneal dialysis, the initial step is to address potential mechanical obstructions or fluid trapping. The nurse should check the lines for kinks or clots and have the client reposition side-to-side to shift fluid toward the catheter holes. Advancing a catheter requires sterile surgical intervention, and adding more fluid would worsen fluid retention."
  },
  {
  id: 232,
  type: "mcq",
  question: "A client diagnosed with Obsessive-Compulsive Disorder (OCD) is late for a scheduled group therapy session because they are repeatedly washing their hands. Which action by the nurse is MOST appropriate?",
  options: [
  "Lock the bathroom door to prevent the client from performing the ritual before group.",
  "Tell the client that they will lose privileges if they do not stop washing their hands immediately.",
  "Allow the client to complete the ritual and discuss modifying the daily schedule later.",
  "Interrupt the ritual and physically guide the client toward the group therapy room."
  ],
  answer: [2],
  rationale: "For clients with OCD, compulsive rituals serve as a vital defense mechanism to manage severe internal anxiety. Abruptly stopping or blocking a ritual can cause panic and elevate anxiety to unmanageable levels. The nurse should allow the client to finish the activity, ensure immediate safety, and plan schedule adjustments later to allow time for rituals before structured activities."
  },
  {
  id: 233,
  type: "mcq",
  question: "The nurse is assessing a 4-year-old child during a routine preschool physical. According to Erikson’s stages of psychosocial development, which developmental task should the nurse expect this child to be working toward?",
  options: [
  "Trust vs. Mistrust.",
  "Autonomy vs. Shame and Doubt.",
  "Initiative vs. Guilt.",
  "Industry vs. Inferiority."
  ],
  answer: [2],
  rationale: "According to Erikson's theory of psychosocial development, preschool-aged children (3 to 6 years old) encounter the crisis of Initiative vs. Guilt, where they seek to assert power and control over their environment through directing play and other social interactions. Trust vs. Mistrust (A) belongs to infancy, Autonomy vs. Shame and Doubt (B) applies to toddlers, and Industry vs. Inferiority (D) centers on school-aged children."
  },
  {
  id: 234,
  type: "sata",
  question: "A nurse finds an unresponsive adult client in a hospital room. After confirming the client is not breathing and has no palpable pulse, the nurse activates the rapid response team and begins cardiopulmonary resuscitation (CPR). Which actions demonstrate high-quality CPR? Select all that apply.",
  options: [
  "Compress the chest at a rate of 100 to 120 compressions per minute.",
  "Allow the chest to fully recoil between each compression.",
  "Deliver compressions to a depth of at least 2 inches (5 cm).",
  "Pause compressions for 15 to 20 seconds to deliver rescue breaths.",
  "Maintain a continuous compression-to-ventilation ratio of 15:2 for an adult.",
  "Minimize all interruptions in chest compressions to less than 10 seconds."
  ],
  answer: [0, 1, 2, 5],
  rationale: "High-quality CPR parameters require a compression rate of 100 to 120 beats per minute, a depth of at least 2 inches for an adult, complete chest wall recoil to allow ventricular filling, and minimizing compression breaks to less than 10 seconds. Pausing for up to 20 seconds introduces prolonged coronary underperfusion, and the standard compression-to-ventilation ratio for single or dual-rescue adult resuscitation is 30:2, not 15:2."
  },
  {
  id: 235,
  type: "mcq",
  question: "A client diagnosed with major depressive disorder is prescribed Phenelzine, a Monoamine Oxidase Inhibitor (MAOI). The nurse is reviewing dietary restrictions with the client. Which lunch menu selection indicates that the client understands the safety restrictions?",
  options: [
  "A grilled cheddar cheese sandwich with a side of pepperoni slices.",
  "A salad topped with sliced avocados, raisins, and red wine vinaigrette.",
  "A grilled chicken breast sandwich on white bread with a side of fresh apples.",
  "A smoked salmon platter with a side of aged swiss cheese."
  ],
  answer: [2],
  rationale: "Monoamine Oxidase Inhibitors (MAOIs) interfere with the breakdown of tyramine, a substance that builds up in aged, fermented, cured, or smoked products. Consuming high-tyramine items can trigger severe vasoconstriction and a dangerous hypertensive crisis. Fresh meats like unmarinated grilled chicken, white bread, and fresh apples carry no dietary tyramine risk. Aged cheeses, cured meats (pepperoni), smoked seafood, raisins, and red wine are all strictly contraindicated."
  },
  {
  id: 236,
  type: "mcq",
  question: "A nurse is performing an APGAR assessment on a newborn infant 1 minute after birth. The nurse notes: heart rate is 112 bpm; slow, irregular respiratory effort; some flexion of the extremities; grimace in response to a suction catheter; and a pink body with blue hands and feet (acrocyanosis). What is the calculated APGAR score?",
  options: [
  "5",
  "6",
  "7",
  "8"
  ],
  answer: [1],
  rationale: "The total APGAR calculation equals 6 based on these indicators: Heart rate greater than 100 bpm provides 2 points; a slow, irregular respiratory baseline adds 1 point; partial flexion of the extremities scores 1 point; a grimace response to suctioning adds 1 point; and a pink trunk with cyanotic extremities (acrocyanosis) awards 1 point (2+1+1+1+1=6)."
  },
  {
  id: 237,
  type: "sata",
  question: "A client is 6 hours postoperative following a total right hip arthroplasty. Which interventions should the nurse implement to prevent joint dislocation or injury? Select all that apply.",
  options: [
  "Maintain the client's right leg in an abducted position using an abduction wedge.",
  "Instruct the client to lean forward to pick up items from the floor.",
  "Avoid flexing the client's right hip more than 90 degrees.",
  "Keep the client's bed in a high Fowler's position during rest periods.",
  "Instruct the client to avoid crossing their legs at the knees or ankles.",
  "Ensure the client's right leg remains internally rotated when turning in bed."
  ],
  answer: [0, 2, 4],
  rationale: "Postoperative precautions for a total hip replacement (posterior approach) focus on preventing adduction, internal rotation, and hip flexion past 90 degrees. An abduction wedge maintains proper leg separation, while keeping flexion below 90 degrees and preventing crossed legs keeps the femoral head seated securely in the acetabular cup. Leaning forward, high Fowler's positioning, and turning with internal rotation create sharp joint angles that elevate dislocation risks."
  },
  {
  id: 238,
  type: "mcq",
  question: "A nurse is caring for a client with an acute traumatic brain injury who has an intraventricular catheter in place to monitor intracranial pressure (ICP). The nurse notes the client's ICP has risen from 12 mmHg to 24 mmHg. Which action should the nurse implement?",
  options: [
  "Lower the head of the bed to a flat, supine position to increase cerebral blood flow.",
  "Instruct the client to turn their head fully to the left side to facilitate jugular drainage.",
  "Hyperventilate the client using a manual resuscitation bag to lower PaCO2.",
  "Administer a prescribed intravenous bolus of Mannitol 20%."
  ],
  answer: [3],
  rationale: "An ICP reading of 24 mmHg represents sustained intracranial hypertension (normal threshold is 5 to 15 mmHg). Mannitol is an osmotic diuretic that creates an osmotic gradient, pulling excess water out of swollen brain tissue into the venous system to reduce intracranial volume and pressure. Supine positioning or severe neck rotation impedes jugular venous outflow and elevates ICP further. Manual hyperventilation is a temporary emergency bridge, not a primary standalone intervention."
  },
  {
  id: 239,
  type: "mcq",
  question: "A client with acute distress due to an asthma exacerbation arrives at the urgent care clinic. Which medication should the nurse expect to administer FIRST to reverse acute bronchospasm?",
  options: [
  "Inhaled Fluticasone propionate.",
  "Oral Montelukast.",
  "Inhaled Albuterol sulfate.",
  "Intravenous Methylprednisolone."
  ],
  answer: [2],
  rationale: "Inhaled albuterol sulfate is a rapid-acting beta-2 adrenergic agonist that stimulates smooth muscle relaxation in the airway, providing immediate bronchodilation to reverse severe acute airflow obstruction. Fluticasone is a long-acting maintenance corticosteroid, montelukast acts as a leukotriene modifier for chronic control, and IV methylprednisolone targets underlying airway inflammation but requires hours to exert a therapeutic response."
  },
  {
  id: 240,
  type: "sata",
  question: "A nurse is assessing a postpartum client 24 hours after an uncomplicated vaginal delivery. Which clinical findings should the nurse document as expected, normal postpartum transitions? Select all that apply.",
  options: [
  "Moderate amount of lochia rubra with a fleshy odor.",
  "Maternal temperature of 100.2°F (37.9°C).",
  "Firm fundus located at the level of the umbilicus.",
  "Urine output of 4,000 mL over the last 24 hours.",
  "Foul-smelling vaginal discharge containing large clots.",
  "High-pitched, loud maternal pulse rate of 115 bpm."
  ],
  answer: [0, 1, 2, 3],
  rationale: "Expected clinical findings 24 hours postpartum include lochia rubra with a normal fleshy odor, a firm uterine fundus contracted at the level of the umbilicus, and a mild temperature elevation under 100.4°F (38°C) secondary to intrapartum dehydration. Postpartum diuresis is a normal mechanism to clear excess plasma volume accumulated during pregnancy. Foul-smelling discharge points to endometritis, and persistent tachycardia warrants investigation for hemorrhage or infection."
  },
  {
  id: 241,
  type: "mcq",
  question: "The nurse is assessing a 6-month-old infant diagnosed with Tetralogy of Fallot. During the assessment, the infant begins to cry intensely, turns deeply cyanotic around the mouth, and displays rapid, labored breathing. Which action should the nurse implement IMMEDIATELY?",
  options: [
  "Administer a standard infant dose of digoxin intravenously.",
  "Place the infant in a knee-chest position.",
  "Prepare for emergency endotracheal intubation.",
  "Apply a cool, wet cloth to the infant's forehead."
  ],
  answer: [1],
  rationale: "Hypercyanotic spells (tet spells) occur in infants with Tetralogy of Fallot when a sudden drop in systemic vascular resistance or spasm of the infundibular septum increases right-to-left shunting across the VSD, bypassing the lungs. Flexing the infant's knees firmly against the chest increases systemic vascular resistance, reducing the right-to-left shunt and diverting blood back into the pulmonary artery to improve oxygenation. Digoxin or external cooling does not address this hemodynamic shift."
  },
  {
  id: 242,
  type: "mcq",
  question: "A client is admitted to the inpatient psychiatric unit in an acute state of bipolar mania. The client is hyperactive, pacing the hallways, wearing loud, revealing clothing, and disrupting other clients. Which intervention should the nurse include in the client's immediate care plan?",
  options: [
  "Involve the client in a competitive, fast-paced board game tournament.",
  "Escort the client to a quiet, low-stimulation area and provide high-calorie finger foods.",
  "Place the client in mechanical restraints until they can remain calm for 1 hour.",
  "Allow the client to continue pacing until they become exhausted and fall asleep."
  ],
  answer: [1],
  rationale: "Manic states feature extreme hyperactivity, emotional lability, and poor impulse control driven by environmental stimuli. Moving the client to a calm, low-stimulation environment helps reduce agitation. Providing portable, high-calorie finger foods addresses their high metabolic demands without forcing them to sit down for a meal. Structured competition can worsen manic agitation, and restraints are legally restricted to situations with imminent safety threats."
  },
  {
  id: 243,
  type: "mcq",
  question: "The nurse responds to a multi-vehicle highway accident as part of a community disaster response team. Which client should the nurse tag with a RED (Immediate) disaster triage tag?",
  options: [
  "A 40-year-old client with a compound femur fracture, a palpable pedal pulse, and a respiratory rate of 22 breaths/min who is screaming in pain.",
  "A 19-year-old client with an open head injury, fixed and dilated pupils, and no spontaneous respirations after opening the airway.",
  "A 35-year-old client with deep chest bruising who is conscious, breathing at 34 breaths/min, and has a weak, rapid radial pulse.",
  "A 52-year-old client with minor lacerations, a small wrist sprain, and a respiratory rate of 18 breaths/min who is walking around the scene."
  ],
  answer: [2],
  rationale: "Under the START (Simple Triage and Rapid Treatment) disaster protocol, a RED tag denotes immediate, life-threatening injuries that are salvageable with rapid intervention. A respiratory rate exceeding 30 breaths per minute accompanied by signs of compromised perfusion (weak radial pulse) points to respiratory failure or shock, requiring immediate treatment. The screaming femur fracture is stable (Yellow), the walking wounded are minor (Green), and the non-breathing head trauma with dilated pupils is classified as expectant (Black)."
  },
  {
  id: 244,
  type: "sata",
  question: "A nurse is reviewing safety protocols for a client diagnosed with endometrial cancer who is undergoing internal radiation therapy via a temporary brachytherapy implant. Which safety interventions should the nurse include in the client's plan of care? Select all that apply.",
  options: [
  "Limit each visitor's time in the client's room to a maximum of 30 minutes per day.",
  "Ensure that pregnant staff and children under the age of 18 do not enter the room.",
  "Wear a lead apron at all times when providing direct hands-on care at the bedside.",
  "Keep a lead-lined container and long-handled forceps inside the client's room.",
  "Instruct the client that they may ambulate freely in the hallway twice per shift.",
  "Assign the client to a private room at the end of the hallway if possible."
  ],
  answer: [0, 1, 3, 5],
  rationale: "Brachytherapy principles enforce the rules of time, distance, and shielding to minimize radiation exposure. Daily visitor contact must be capped at 30 minutes, and vulnerable populations (pregnant individuals, children) are banned from entering. A lead container and forceps must remain in the room in case the radioactive source dislodges. Private room placement isolates the source, while strict bed rest prevents accidental implant dislodgement. Lead aprons are worn during specific close-contact procedures, not for all bedside presence."
  },
  {
  id: 245,
  type: "mcq",
  question: "The nurse is preparing to administer scheduled morning medications to a client diagnosed with Type 1 Diabetes Mellitus. The prescription reads: 'Administer 10 units of NPH insulin and 5 units of Regular insulin subcutaneously at 0730.' Which action demonstrates correct technique when mixing these insulins in a single syringe?",
  options: [
  "Draw up 10 units of NPH insulin into the syringe first, followed by 5 units of Regular insulin.",
  "Inject 10 units of air into the NPH vial, then inject 5 units of air into the Regular vial and draw up the Regular insulin first.",
  "Inject 5 units of air into the Regular vial, draw up the Regular insulin, then inject 10 units of air into the NPH vial.",
  "Draw each insulin up into separate syringes and combine them together in a sterile medicine cup."
  ],
  answer: [1],
  rationale: "To avoid contaminating a short-acting vial with intermediate-acting proteins, insulin mixing must follow a clear sequence: air is injected into the NPH (cloudy) vial first, then air is injected into the Regular (clear) vial, followed immediately by drawing up the Regular insulin. The NPH insulin is drawn last, following the CLEAR TO CLOUDY progression. Mixing medications in an open medicine cup violates sterility and dosing precision guidelines."
  },
  {
  id: 246,
  type: "mcq",
  question: "The nurse is reviewing the electronic health record of a newborn infant who is 12 hours old. The nurse notes the following assessment findings. Which finding represents a critical variation that requires immediate notification to the health care provider?",
  options: [
  "A blood glucose level of 34 mg/dL (1.9 mmol/L).",
  "A respiratory rate of 48 breaths/min with short periods of apnea lasting 8 seconds.",
  "A localized area of soft-tissue scalp swelling that crosses the suture lines.",
  "Erythema toxicum lesions appearing as tiny, scattered red papules on the trunk."
  ],
  answer: [0],
  rationale: "Neonatal hypoglycemia is defined as a blood glucose value falling below 40 mg/dL within the first 24 hours of life. This requires immediate intervention (feeding or IV glucose) to avoid neurological damage or seizures. A respiratory rate between 30 and 60 with brief, non-cyanotic pause patterns is normal periodic breathing. A caput succedaneum crosses suture lines safely, and erythema toxicum is a benign newborn rash."
  },
  {
  id: 247,
  type: "sata",
  question: "A client is admitted to the emergency department experiencing a severe, acute panic attack. The client is hyperventilating, trembling, and shouting, 'I'm having a heart attack! I think I'm going to die!' Which interventions should the nurse implement? Select all that apply.",
  options: [
  "Sit quietly with the client in a calm, dimly lit environment.",
  "Ask the client to explain in detail what triggered the panic response.",
  "Use short, simple sentences and speak in a calm, low-pitched voice.",
  "Instruct the client to take slow, deep breaths along with the nurse.",
  "Leave the client alone briefly so they can regain behavioral control.",
  "Reassure the client that they are safe and that the panic attack will pass."
  ],
  answer: [0, 2, 3, 5],
  rationale: "During a severe panic attack, cognitive processing drops significantly due to overwhelming anxiety. Therapeutic interventions emphasize structural calmness, environmental desensitization, direct behavioral coaching for respiration, and explicit, simple safety reassurance. Forcing a detailed discussion of triggers during an attack is impossible and worsens anxiety, and an acutely panicked client must never be left alone."
  },
  {
  id: 248,
  type: "mcq",
  question: "The nurse is evaluating a 15-month-old toddler during a routine well-child assessment. Which toy selection by the parents is most age-appropriate to promote gross motor skills and developmental growth?",
  options: [
  "A detailed 24-piece wooden jigsaw puzzle.",
  "A brightly colored plastic push-along toy lawnmower.",
  "A battery-operated electronic tablet with nursery rhyme games.",
  "A set of small plastic marbles and a sorting container."
  ],
  answer: [1],
  rationale: "At 15 months, toddlers are expanding their gross motor capacities, including stable independent walking. Push-pull toys offer excellent structural support that builds coordination, balance, and leg strength. Multi-piece puzzles exceed their fine motor limits, screens encourage sedentary behavior, and small items like marbles present an extreme choking hazard for children in this oral exploration stage."
  },
  {
  id: 249,
  type: "mcq",
  question: "A client is admitted to the hospital with acute pancreatitis. The client reports severe, agonizing epigastric pain that radiates directly to the back. Which laboratory value should the nurse expect to find elevated in this client?",
  options: [
  "Serum albumin.",
  "Serum amylase.",
  "Serum calcium.",
  "Blood hemoglobin."
  ],
  answer: [1],
  rationale: "Acute pancreatitis involves cellular inflammation and premature acinar activation of digestive enzymes within the pancreas. This results in the leakage of pancreatic enzymes into systemic circulation, causing a rapid spike in serum amylase and lipase levels within 24 hours of symptom onset. Albumin levels typically fall or remain unchanged, hypocalcemia (low calcium) is a common complication, and hemoglobin may drop if necrotizing bleeding occurs."
  },
  {
  id: 250,
  type: "sata",
  question: "A nurse is providing foot care education to a client newly diagnosed with Type 2 Diabetes Mellitus. Which practices should the nurse instruct the client to follow? Select all that apply.",
  options: [
  "Wash the feet daily with warm water and mild soap, checking the water temperature with an elbow.",
  "Apply a thick layer of moisturizing lotion between the toes to prevent skin cracking.",
  "Use an over-the-counter chemical corn remover to treat any hardened calluses.",
  "Avoid walking barefoot at any time, including indoors.",
  "Inspect the bottoms of both feet daily using a handheld mirror.",
  "Cut the toenails straight across and file any sharp edges with an emery board."
  ],
  answer: [0, 3, 4, 5],
  rationale: "Diabetic neuropathy and peripheral vascular disease compromise sensation and wound healing, making meticulous foot care essential. Daily cleansing using temperate water, avoiding barefoot walking to prevent trauma, inspecting hidden plantar surfaces with a mirror, and cutting nails straight across protect against infection and ulceration. Moisture shouldn't accumulate between the toes as it fosters fungal growth, and chemical corn removers are avoided because they cause caustic tissue injury."
  },
  {
  id: 251,
  type: "mcq",
  question: "The nurse is caring for a client who is 24 hours postoperative following a total abdominal hysterectomy. The client suddenly develops sharp, pleuritic chest pain, localized shortness of breath, and a respiratory rate of 26 breaths/min. The client's heart rate is 108 bpm. Which complication should the nurse suspect first?",
  options: [
  "Atelectasis.",
  "Pulmonary Embolism (PE).",
  "Myocardial Infarction (MI).",
  "Bacterial Pneumonia."
  ],
  answer: [1],
  rationale: "Major pelvic surgeries and subsequent immobility significantly increase the risk of deep vein thrombosis, which can break free and cause a pulmonary embolism. The sudden onset of pleuritic chest pain, unexplained tachypnea, tachycardia, and dyspnea are hallmark signs of a pulmonary vascular occlusion. Atelectasis and pneumonia present more gradually with low-grade fevers or productive coughs, while myocardial infarction pain is typically dull, crushing, and substernal."
  },
  {
  id: 252,
  type: "mcq",
  question: "A client diagnosed with Borderline Personality Disorder approaches the evening nurse and says, 'The morning nurse is terrible and refused to help me, but I know you are an amazing nurse and will let me stay up past bedtime.' Which response by the nurse is most therapeutic?",
  options: [
  "'The morning nurse is an excellent clinician, and you should not talk about them that way.'",
  "'Thank you for the compliment, I will extend your bedtime by 30 minutes just for tonight.'",
  "'All clients must follow the established unit bedtime rules, which cannot be changed.'",
  "'Why do you think the morning nurse was trying to be unhelpful to you?'"
  ],
  answer: [2],
  rationale: "Clients with borderline personality disorder frequently employ the defense mechanism of SPLITTING which involves classifying individuals as entirely good or entirely bad to manipulate staff and bypass boundaries. The therapeutic response requires neutral, clear reinforcement of universal unit rules. Defending colleagues or exploring the manipulation with WHY questions can reinforce splitting behaviors, while yielding to the request breaks team consistency."
  },
  {
  id: 253,
  type: "mcq",
  question: "A nurse on a telemetry unit is reviewing the continuous electrocardiogram (ECG) monitor for four clients. Which rhythm finding requires the nurse to intervene immediately?",
  options: [
  "Sinus bradycardia at 52 bpm in a resting marathon runner.",
  "Atrial fibrillation with a controlled ventricular response rate of 74 bpm.",
  "Three consecutive premature ventricular contractions (PVCs) on a client's strip.",
  "Ventricular fibrillation in a client who was recently sleeping."
  ],
  answer: [3],
  rationale: "Ventricular fibrillation (V-fib) is a lethal cardiac rhythm characterized by a chaotic, uncoordinated quivering of the ventricles that produces zero cardiac output, leading rapidly to brain death if uncorrected. The nurse must immediately check the client, activate the emergency system, and begin CPR/defibrillation. Bradycardia in conditioned athletes or controlled atrial fibrillation are clinically stable, and short salvos of consecutive PVCs require monitoring but are secondary to active V-fib."
  },
  {
  id: 254,
  type: "sata",
  question: "A child is admitted to the pediatric unit with a confirmed diagnosis of Varicella-Zoster (Chickenpox) lesions that are actively weeping. Which transmission-based precautions and isolation protocols must the nurse implement? Select all that apply.",
  options: [
  "Airborne precautions.",
  "Droplet precautions.",
  "Contact precautions.",
  "Negative-pressure isolation room.",
  "Standard surgical mask for all healthcare workers entering the room.",
  "Positive-pressure isolation room."
  ],
  answer: [0, 2, 3],
  rationale: "Disseminated or open, weeping Varicella-Zoster (chickenpox) lesions require dual isolation routes: airborne precautions for viral particles suspended in air currents, and contact precautions for direct exposure to infectious vesicle fluid. This necessitates placement in a negative-pressure isolation room and the use of an N95 respirator mask by healthcare personnel. Positive pressure or simple surgical masks fail to block airborne transmission."
  },
  {
  id: 255,
  type: "mcq",
  question: "A client is prescribed intravenous Lisinopril for hypertension. Before administering the first dose, the nurse reviews the client's medical history and laboratory values. Which finding should cause the nurse to hold the medication and contact the health care provider?",
  options: [
  "Serum potassium level of 5.4 mEq/L.",
  "Serum sodium level of 136 mEq/L.",
  "History of mild chronic obstructive pulmonary disease (COPD).",
  "Blood pressure reading of 148/92 mmHg."
  ],
  answer: [0],
  rationale: "Lisinopril is an ACE inhibitor that suppresses aldosterone secretion, reducing potassium excretion by the kidneys. Administering it to a client with a baseline serum potassium of 5.4 mEq/L (hyperkalemia) can drive potassium levels higher, risking severe cardiac conduction blocks. Low-normal sodium and a history of mild COPD are not contraindications, and elevated blood pressure is the target indication for the medication."
  },
  {
  id: 256,
  type: "mcq",
  question: "The nurse is monitoring a client at 36 weeks gestation who was admitted with severe preeclampsia. Which clinical finding indicates that the client's condition is worsening and that they may be progressing toward an eclamptic seizure?",
  options: [
  "1+ bilateral pitting ankle edema.",
  "Deep tendon reflexes of 4+ with 2 beats of clonus.",
  "A blood pressure reading of 142/90 mmHg.",
  "Increased urinary output of 60 mL/hour."
  ],
  answer: [1],
  rationale: "Hyperreflexia (4+) and the presence of clonus reveal severe central nervous system irritability caused by worsening cerebral edema in preeclampsia. This is a critical indicator of an impending eclamptic seizure, requiring immediate intervention (such as magnesium sulfate). Mild ankle edema and a blood pressure of 142/90 mmHg are expected baseline findings in preeclampsia, and 60 mL/hour of urine indicates preserved renal perfusion."
  },
  {
  id: 257,
  type: "sata",
  question: "A client is admitted to the emergency department presenting with extreme lethargy, a blood pressure of 88/50 mmHg, a heart rate of 58 bpm, and generalized non-pitting edema around the eyes and hands. The family notes the client has a history of hypothyroidism but stopped taking their medication months ago. Which interventions should the nurse anticipate implementing? Select all that apply.",
  options: [
  "Administration of rapid intravenous boluses of chilled normal saline.",
  "Intravenous administration of Levothyroxine sodium.",
  "Monitoring for signs of severe hypothermia and applying active warming blankets.",
  "Initiating a continuous intravenous insulin infusion to lower blood glucose.",
  "Intravenous administration of hydrocortisone if adrenal insufficiency is suspected.",
  "Monitoring the client's mechanical ventilation settings if respiratory failure occurs."
  ],
  answer: [1, 2, 4, 5],
  rationale: "Myxedema coma is an extreme, life-threatening progression of severe hypothyroidism characterized by hypothermia, cardiovascular depression, and hypoventilation. Treatment requires restoring thyroid hormone levels via IV levothyroxine, passive rewarming to avoid rapid vasodilation and shock, and adding hydrocortisone to cover concurrent adrenal insufficiency. Respiratory failure often requires mechanical airway support. Chilled saline or insulin infusions would worsen the underlying hypothermia and hypoglycemia common in this crisis."
  },
  {
  id: 258,
  type: "mcq",
  question: "A nurse is providing prenatal education to a primigravida client at 10 weeks gestation. The nurse is discussing the upcoming schedule for standard routine prenatal screening tests. At which gestational age window should the nurse instruct the client to return for the standard oral glucose tolerance test (OGTT) to screen for gestational diabetes?",
  options: [
  "14 to 16 weeks gestation.",
  "18 to 20 weeks gestation.",
  "24 to 28 weeks gestation.",
  "34 to 36 weeks gestation."
  ],
  answer: [2],
  rationale: "Routine universal screening for gestational diabetes mellitus using a 1-hour oral glucose tolerance test (OGTT) is standard clinical practice between 24 and 28 weeks of gestation, a period when placental hormone production drops maternal insulin sensitivity. Screening earlier is reserved for high-risk profiles, and screening later leaves inadequate time for metabolic control."
  },
  {
  id: 259,
  type: "mcq",
  question: "A client is receiving a continuous intravenous infusion of Piperacillin/Tazobactam. Ten minutes into the infusion, the client reports sudden itching, a tight feeling in the chest, and difficulty breathing. The nurse notes audible wheezing and facial hives. Which action should the nurse take FIRST?",
  options: [
  "Administer a PRN dose of diphenhydramine intravenously.",
  "Stop the medication infusion immediately.",
  "Apply supplemental oxygen via a nasal cannula at 2 L/min.",
  "Notify the healthcare provider and activate the rapid response team."
  ],
  answer: [1],
  rationale: "The development of hives, wheezing, dyspnea, and chest tightness indicates an acute anaphylactic reaction. The immediate priority is to stop the infusion of the triggering allergen to prevent worsening the reaction. While administering oxygen, providing medication (epinephrine/diphenhydramine), and activating emergency services are all essential steps, stopping the drug infusion must occur first."
  },
  {
  id: 260,
  type: "sata",
  question: "A nurse is caring for an adult client who returned to the medical-surgical unit 1 hour ago following a right-sided percutaneous renal biopsy. Which nursing interventions are appropriate for this client's immediate care? Select all that apply.",
  options: [
  "Position the client in a prone position for the first 6 hours to prevent bleeding.",
  "Position the client supine on a rolled towel placed under the biopsy site for pressure.",
  "Monitor the client's vital signs every 15 minutes for the first hour.",
  "Instruct the client that they may ambulate to the bathroom with assistance.",
  "Encourage the client to maintain strict bed rest for the prescribed 6 to 24 hours.",
  "Assess every voided urine sample for macroscopic (gross) hematuria."
  ],
  answer: [1, 2, 4, 5],
  rationale: "Following a percutaneous renal biopsy, the primary risk is hemorrhage from the highly vascular kidney. Placing the client supine over a rolled towel creates localized pressure over the puncture site to encourage hemostasis, and strict bed rest for 6 to 24 hours prevents mechanical bleeding. Frequent vital signs help detect early hypovolemic changes, and inspecting all voided urine catches internal bleeding. Prone positioning or early ambulation is contraindicated."
  },
  {
  id: 261,
  type: "mcq",
  question: "A 6-month-old infant is brought to the urgent care clinic. The parents report the infant has been crying intermittently every 15 to 20 minutes, drawing up their knees to their chest, and recently passed a stool that looked like dark red jelly. Which condition should the nurse suspect first?",
  options: [
  "Pyloric stenosis.",
  "Hirschsprung disease.",
  "Intussusception.",
  "Acute appendicitis."
  ],
  answer: [2],
  rationale: "The clinical presentation of severe, intermittent abdominal pain (evidenced by drawing knees to the chest) alternating with calm periods, along with \"currant-jelly\" stools containing blood and mucus, is classic for intussusception—the telescoping of one segment of intestine into another. Pyloric stenosis involves non-bloody projectile vomiting, and Hirschsprung disease typically presents as newborn meconium delays and chronic constipation."
  },
  {
  id: 262,
  type: "mcq",
  question: "A client is brought to the emergency department by emergency medical services after being found unresponsive in an alleyway. The nurse notes a respiratory rate of 6 breaths/min, pinpoint pupils, and cool, clammy skin. Which medication should the nurse prepare to administer immediately?",
  options: [
  "Flumazenil.",
  "Naloxone.",
  "Chlordiazepoxide.",
  "Methadone."
  ],
  answer: [1],
  rationale: "The presentation of severe respiratory depression (6 breaths/min), pinpoint pupils (miosis), and unresponsiveness forms the classic diagnostic triad of acute opioid overdose. Naloxone is a competitive opioid receptor antagonist that rapidly reverses respiratory depression. Flumazenil reverses benzodiazepines, chlordiazepoxide treats alcohol withdrawal, and methadone is a long-acting opioid agonist used for maintenance therapy rather than acute overdose reversal."
  },
  {
id: 263,
type: "mcq",
question: "A nurse is caring for a mechanically ventilated client in the intensive care unit. The ventilator's high-pressure limit alarm suddenly begins sounding. Which clinical finding should the nurse investigate as the cause of this alarm?",
options: [
"A loose connection between the endotracheal tube and the ventilator circuit.",
"The client has bit down tightly on the endotracheal tube.",
"A sudden leak in the endotracheal tube cuff.",
"The client has become extubated accidentally."
],
answer: [1],
rationale: "High-pressure alarms sound when the ventilator encounters increased resistance to gas flow. This can be caused by circuit kinks, secretions, bronchospasm, or the client biting the tube. Loose connections, cuff leaks, and accidental extubation cause a loss of pressure, which triggers a low-pressure alarm."
},
{
id: 264,
type: "sata",
question: "A nurse is admitting a client with a history of an active, draining wound infection. The laboratory confirms the presence of Methicillin-Resistant Staphylococcus Aureus (MRSA). Which personal protective equipment (PPE) must the nurse don before entering the room to provide direct physical care? Select all that apply.",
options: [
"N95 respirator mask.",
"Clean, non-sterile gloves.",
"Fluid-resistant isolation gown.",
"Goggles or face shield.",
"Surgical mask.",
"Sterile gloves."
],
answer: [1, 2],
rationale: "MRSA in an active, draining wound requires contact precautions. The nurse must wear an isolation gown and clean gloves to prevent transferring the bacteria via direct contact. Masks (surgical or N95) and eye protection are only required if there is a risk of splashing, which is not specified for a standard room entry. Sterile gloves are reserved for sterile procedures, not basic physical care."
},
{
id: 265,
type: "mcq",
question: "A client is prescribed a continuous intravenous infusion of Sodium Nitroprusside at 3 mcg/kg/min for a hypertensive emergency. Which safety intervention must the nurse implement during the administration of this medication?",
options: [
"Protect the intravenous fluid bag and tubing from light using an opaque cover.",
"Keep the medication running continuously for at least 72 hours without interruption.",
"Monitor the client's blood pressure once every 4 hours using an automatic cuff.",
"Restrict fluid intake to 500 mL per shift to prevent fluid overload."
],
answer: [0],
rationale: "Sodium nitroprusside is highly sensitive to light and degrades into toxic cyanide ions if uncovered. It must be wrapped in an opaque or light-protective sleeve. Due to the high risk of thiocyanate toxicity, infusions are rarely run up to 72 hours. Blood pressure must be monitored continuously via an arterial line or every 5 to 15 minutes, not every 4 hours."
},
{
id: 266,
type: "mcq",
question: "The nurse is assessing a pregnant client at 32 weeks gestation who was admitted to the antepartum unit with a confirmed diagnosis of total placenta previa. Which assessment procedure is strictly contraindicated for this client?",
options: [
"Performing a sterile vaginal digital examination to check cervical dilation.",
"Palpating the abdomen gently using Leopold's maneuvers.",
"Applying an external electronic fetal heart rate monitor.",
"Obtaining a maternal blood sample for a routine complete blood count."
],
answer: [0],
rationale: "In placenta previa, the placenta completely or partially covers the cervical os. A digital vaginal exam can puncture or tear the placenta, causing catastrophic, life-threatening maternal hemorrhage. Leopold's maneuvers, external fetal monitoring, and routine venipuncture are non-invasive and safe."
},
{
id: 267,
type: "sata",
question: "A nurse is completing an admission assessment on a client diagnosed with severe major depressive disorder. Which behavioral, emotional, and physical findings should the nurse identify as classic manifestations of depression? Select all that apply.",
options: [
"Anhedonia (loss of interest or pleasure in usual activities).",
"Insomnia or hypersomnia nearly every day.",
"Pressured, rapid speech and flight of ideas.",
"Psychomotor agitation or retardation observed by others.",
"Grandiose delusions of wealth and power.",
"Feelings of worthlessness or excessive guilt."
],
answer: [0, 1, 3, 5],
rationale: "Classic diagnostic criteria for major depressive disorder include anhedonia, sleep disturbances (insomnia/hypersomnia), altered psychomotor activity (agitation or visible slowing), and feelings of worthlessness or inappropriate guilt. Pressured speech, flight of ideas, and grandiose delusions are hallmarks of a manic episode, not depression."
},
{
id: 268,
type: "mcq",
question: "The nurse is assessing a 3-year-old child during a routine clinic visit. Which type of play behavior is most developmentally typical and expected for a child of this age?",
options: [
"Solitary play, where the child plays completely alone with blocks.",
"Parallel play, where the child plays next to another child using similar toys but does not interact.",
"Associative play, where children play together engaged in a similar activity but without formal organization.",
"Cooperative play, where children work together in an organized fashion to achieve a common goal."
],
answer: [2],
rationale: "Preschool-aged children (around 3 years old) transition into associative play, where they borrow toys and engage in similar activities together without formal rules or group organization. Solitary play is typical of infants, parallel play dominates toddlerhood (2 years old), and cooperative play emerges later in older school-aged children."
},
{
id: 269,
type: "mcq",
question: "A client with a history of an anterior wall myocardial infarction is admitted to the cardiac care unit. The nurse notes the client has become progressively pale, cold, and clammy. Vital signs reveal a blood pressure of 78/42 mmHg, a heart rate of 124 bpm, and a respiratory rate of 28 breaths/min with crackles audible in both lung bases. Which type of shock is this client experiencing?",
options: [
"Hypovolemic shock.",
"Anaphylactic shock.",
"Neurogenic shock.",
"Cardiogenic shock."
],
answer: [3],
rationale: "Cardiogenic shock occurs when severe myocardial damage (like an anterior wall MI) compromises the heart's pumping ability, causing profound hypotension and fluid backing up into the lungs (pulmonary congestion/crackles). Hypovolemic shock involves fluid loss without pulmonary congestion. Anaphylactic and neurogenic shocks are forms of distributive shock marked by profound vasodilation rather than pump failure."
},
{
id: 270,
type: "sata",
question: "A nurse is providing discharge teaching to a client diagnosed with severe Gastroesophageal Reflux Disease (GERD). Which lifestyle and dietary modifications should the nurse instruct the client to implement? Select all that apply.",
options: [
"Eat three large, high-calorie meals per day to maintain energy levels.",
"Avoid consuming peppermint, chocolate, and caffeinated beverages.",
"Elevate the head of the bed by 6 to 9 inches using blocks or a wedge.",
"Lie down flat in a supine position immediately after eating to promote rest.",
"Stop smoking cigarettes and avoid drinking alcohol.",
"Refrain from eating any food or snacks within 3 hours of going to sleep."
],
answer: [1, 2, 4, 5],
rationale: "GERD management focuses on reducing lower esophageal sphincter (LES) pressure and keeping gastric acid low. Peppermint, chocolate, caffeine, nicotine, and alcohol lower LES tone and must be avoided. Elevating the head of the bed uses gravity to prevent reflux, and avoiding food 3 hours before sleep prevents overnight regurgitation. Large meals and lying flat after eating exacerbate reflux."
},
{
id: 271,
type: "mcq",
question: "A nurse is caring for a client who is recovering from an acute kidney injury (AKI). The client's daily urine output has suddenly increased from 400 mL/day to 4,500 mL/day. Which phase of acute kidney injury has the client entered?",
options: [
"Oliguric phase.",
"Diuretic phase.",
"Recovery phase.",
"Prerenal phase."
],
answer: [1],
rationale: "The diuretic phase of AKI is marked by a massive surge in daily urine output (often 1 to 5 liters per day) as the kidneys regain their ability to excrete water but cannot yet fully concentrate the urine. The oliguric phase features a sharp decline in urine output (less than 400 mL/day), and the recovery phase marks the stabilization of lab work and filtration. Prerenal is an anatomical classification of injury, not a phase."
},
{
id: 272,
type: "mcq",
question: "A client who was admitted to the inpatient unit following a traumatic physical assault states to the nurse, \"I keep having these horrible nightmares where I relive the attack over and over again, and I feel like I'm completely detached from reality.\" Which response by the nurse is most therapeutic?",
options: [
"You need to stop thinking about the assault so that you can move on with your life.",
"It sounds like you are experiencing highly distressing flashbacks and intrusive thoughts related to the trauma.",
"Why didn't you seek psychological counseling immediately after the assault occurred?",
"Don't worry, those nightmares will eventually disappear if you take your sleep medications."
],
answer: [1],
rationale: "The nurse's most therapeutic action is to validate the client's experience by using active listening and open observation to label their symptoms. Telling them to stop thinking about it or making unverified promises dismisses their distress. \"Why\" questions imply blame and sound judgmental."
},
{
id: 273,
type: "mcq",
question: "A nurse is reviewing the assignment for the day. Which client should the nurse assess first?",
options: [
"A 55-year-old client who had an ischemic stroke 3 days ago and has persistent mild slurred speech.",
"A 32-year-old client with a history of epilepsy who had a 1-minute generalized seizure 45 minutes ago and is currently sleeping.",
"A 64-year-old client with a known intracranial aneurysm who reports the sudden onset of the worst headache of my life.",
"A 42-year-old client with a lumbar spinal cord injury who is unable to feel their toes."
],
answer: [2],
rationale: "The sudden onset of \"the worst headache of my life\" in a client with an intracranial aneurysm is a hallmark sign of aneurysmal rupture causing a life-threatening subarachnoid hemorrhage. This client requires immediate critical evaluation. Slurred speech 3 days after a stroke and sensory loss after a lumbar injury represent expected chronic issues. A postictal sleep state 45 minutes after a brief seizure is stable."
},
{
id: 274,
type: "sata",
question: "A nurse is leading a community health seminar regarding accidental poisoning prevention in toddlers. Which safety measures should the nurse highlight to parents? Select all that apply.",
options: [
"Store all household cleaning chemicals in locked cabinets out of reach.",
"Transfer liquid medications into unmarked, clear plastic cups for easy access.",
"Keep the phone number for the national Poison Control Center displayed near the phone.",
"Store medications inside original containers equipped with childproof safety caps.",
"Call medications \"candy\" so that children will take them without complaining.",
"Keep all household plants out of reach unless they are confirmed to be non-toxic."
],
answer: [0, 2, 3, 5],
rationale: "To prevent poisoning in inquisitive toddlers, chemicals must be locked away, medications must remain in childproof containers, and toxic houseplants must be removed or isolated. Displaying the Poison Control number ensures immediate crisis access. Unmarked open containers invite accidental ingestion, and calling medication \"candy\" increases the risk of a child seeking it out independently."
},
{
id: 275,
type: "mcq",
question: "A client is prescribed oral Warfarin sodium 5 mg daily for chronic atrial fibrillation. Which laboratory test must the nurse monitor to determine the therapeutic efficacy and safety of this medication?",
options: [
"Activated partial thromboplastin time (aPTT).",
"Prothrombin time (PT) and International Normalized Ratio (INR).",
"Bleeding time and platelet count.",
"Erythrocyte sedimentation rate (ESR)."
],
answer: [1],
rationale: "Warfarin therapy works by inhibiting vitamin K-dependent clotting factors and is carefully monitored using Prothrombin Time (PT) and the International Normalized Ratio (INR). The target therapeutic INR range is typically 2.0 to 3.0. In contrast, aPTT tracks intravenous heparin therapy, platelet counts identify thrombocytopenia risks, and ESR measures systemic inflammation."
},
{
id: 276,
type: "mcq",
question: "The nurse is monitoring a client in the second stage of labor. The electronic fetal monitor displays a pattern of fetal heart rate decelerations that begin after the peak of the uterine contraction and return to baseline well after the contraction has ended. Which underlying issue causes this pattern?",
options: [
"Fetal head compression.",
"Umbilical cord compression.",
"Uteroplacental insufficiency.",
"Maternal hypotension."
],
answer: [2],
rationale: "Decelerations that step down late—onset after the contraction peak with delayed recovery—are defined as late decelerations. These indicate uteroplacental insufficiency, meaning inadequate oxygen exchange during contractions. Head compression causes early decelerations, cord compression causes sharp variable shapes, and maternal hypotension can cause late patterns but is an indirect root mechanism."
},
{
id: 277,
type: "sata",
question: "A nurse is reviewing the laboratory results for an elderly client who has been experiencing severe vomiting and diarrhea for 3 days. The client's serum sodium level is reported as 152 mEq/L. Which clinical signs should the nurse expect to observe? Select all that apply.",
options: [
"Intense thirst and dry, sticky mucous membranes.",
"Distended neck veins and a bounding pulse.",
"Restlessness, agitation, and confusion.",
"Flattened T-waves and prominent U-waves on the ECG.",
"Flushed skin and hyperthermia.",
"Postural hypotension and tachycardia."
],
answer: [0, 2, 4, 5],
rationale: "A serum sodium level of 152 mEq/L represents hypernatremia, which is exacerbated here by severe dehydration (hypovolemia). Signs include cellular dehydration (thirst, dry mucus membranes), neurological irritation (restlessness, confusion), dry flushed skin, and low blood volume (postural hypotension, reflex tachycardia). Distended neck veins point to fluid overload, and U-waves signify hypokalemia (low potassium)."
},
{
id: 278,
type: "mcq",
question: "A nurse is calculating the obstetric history for a pregnant client using the GTPAL system. The client is currently 12 weeks pregnant. Her past history includes: a delivery of twins at 35 weeks gestation (both living); a delivery of a full-term infant at 39 weeks gestation (living); and a spontaneous abortion at 10 weeks gestation. What is her correct GTPAL status?",
options: [
"G4, T1, P1, A1, L3",
"G3, T1, P2, A1, L3",
"G4, T2, P1, A1, L2",
"G3, T1, P1, A1, L2"
],
answer: [0],
rationale: "The GTPAL calculation results in G4, T1, P1, A1, L3 based on these rules:\n- Gravida (G): 4 total pregnancies (current pregnancy, twins, full-term, and miscarriage).\n- Term (T): 1 pregnancy delivered at or past 37 weeks (the 39-week delivery).\n- Preterm (P): 1 pregnancy delivered between 20 and 36 weeks 6 days (the 35-week twin delivery; twins count as a single event for G/P/T columns).\n- Abortion (A): 1 spontaneous loss prior to 20 weeks.\n- Living (L): 3 living children total (the twins plus the full-term child)."
},
{
id: 279,
type: "mcq",
question: "A client diagnosed with major depressive disorder has been taking Fluoxetine 20 mg daily for 2 weeks. The client calls the outpatient clinic and tells the nurse, \"This medication isn't working at all, I still feel very sad and empty.\" Which response by the nurse is most appropriate?",
options: [
"\"You should double your dose starting tomorrow morning to make it work faster.\"",
"\"Stop taking the medication immediately and we will try a different drug class.\"",
"\"It typically takes between 2 to 4 weeks for therapeutic effects to become noticeable.\"",
"\"The sadness means you are experiencing an adverse toxic reaction to the medication.\"\""
],
answer: [2],
rationale: "Fluoxetine is a Selective Serotonin Reuptake Inhibitor (SSRI). These medications require 2 to 4 weeks (and up to 6 weeks for full effect) to change neurotransmitter concentrations enough to relieve depressive symptoms. The nurse must provide this education to ensure compliance. Changing doses or stopping the medication abruptly without a provider's direction is unsafe."
},
{
id: 280,
type: "sata",
question: "A nurse is caring for a client who underwent a total left knee arthroplasty 12 hours ago. Which interventions should the nurse prioritize to promote safe recovery and prevent complications? Select all that apply.",
options: [
"Position a pillow directly underneath the client's left knee to keep it flexed.",
"Monitor the neurovascular status of the left leg (pulses, sensation, warmth) every 2 to 4 hours.",
"Assist the client with early ambulation and leg exercises as prescribed.",
"Apply a continuous passive motion (CPM) machine if prescribed, ensuring correct alignment.",
"Maintain the left leg in a position of hyperextension during periods of sleep.",
"Apply ice packs to the left knee as prescribed to reduce inflammation and edema."
],
answer: [1, 2, 3, 5],
rationale: "Postoperative total knee replacement care demands careful neurovascular monitoring to spot nerve or vessel compression, early physical movement to prevent blood clots, and cold therapy to reduce surgical swelling. A continuous passive motion machine can be used if ordered by the surgeon. Elevating the knee with a pillow directly beneath it is strictly avoided because it risks creating flexion contractures; the joint must remain extended when resting."
},
{
id: 281,
type: "mcq",
question: "The nurse is assessing a 2-year-old child brought to the emergency department for a sudden onset of a high-pitched, harsh sound heard on inspiration (stridor) and a prominent barking cough. The child is alert but anxious. Which respiratory condition is this child experiencing?",
options: [
"Asthma exacerbation.",
"Acute Laryngotracheobronchitis (Croup).",
"Acute Bronchiolitis (RSV).",
"Cystic Fibrosis."
],
answer: [1],
rationale: "A barking cough (\"seal-like\") paired with inspiratory stridor is the classic presentation of laryngotracheobronchitis (croup), an upper airway viral infection that causes swelling around the vocal cords. Asthma causes expiratory wheezing rather than stridor, bronchiolitis presents with lower airway wheezing and copious mucus, and cystic fibrosis is a chronic genetic condition marked by thick secretions, not acute barking episodes."
},
{
id: 282,
type: "mcq",
question: "A nurse enters the room of a client diagnosed with schizophrenia. The client points to an empty corner of the room and yells, \"Look at those giant, fiery spiders crawling up the wall! Get them away from me!\" Which response by the nurse is most therapeutic?",
options: [
"\"I don't see any spiders on the wall, but I can see that you are feeling very frightened right now.\"",
"\"Let me get some bug spray so I can kill the spiders for you.\"",
"\"You are just imagining things because you forgot to take your antipsychotic pill.\"",
"\"Tell me more about the spiders. What color are they and what are they saying?\""
],
answer: [0],
rationale: "When a client experiences a visual hallucination, the therapeutic response requires presenting reality gently while simultaneously validating the underlying emotion (fear). Agreeing to spray the bugs validates the hallucination as real, arguing or scolding them ruins rapport, and digging for more details reinforces the delusion."
}
];