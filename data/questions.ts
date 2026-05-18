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
  }
];