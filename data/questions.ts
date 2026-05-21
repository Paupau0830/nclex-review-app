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
  }
];