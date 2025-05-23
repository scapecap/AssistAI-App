/**
 * procedureData.js
 * 
 * Contains sample emergency medical procedures for the MVP.
 * In production, this would be fetched from a medical database.
 */

export const procedureData = [
    {
        id: 'cardiac-arrest',
        name: 'Cardiac Arrest Protocol',
        category: 'Critical Care',
        description: 'Adult cardiac arrest management protocol',
        urgency: 'high',
        estimatedTime: '30+ min',
        type: 'guidance',
        steps: [
            'Ensure scene safety and use PPE',
            'Check responsiveness - tap shoulders and shout',
            'Call for help and request AED/defibrillator',
            'Check for pulse (carotid) for no more than 10 seconds',
            'Begin high-quality CPR - 30 compressions at 100-120/min, depth 2-2.4 inches',
            'Open airway using head-tilt chin-lift',
            'Give 2 rescue breaths - each over 1 second',
            'Continue CPR cycles (30:2) until AED arrives',
            'Apply AED pads and follow voice prompts',
            'Resume CPR immediately after shock or "no shock advised"',
            'Consider advanced airway after 2 cycles',
            'Administer medications per protocol'
        ]
    },
    {
        id: 'anaphylaxis',
        name: 'Anaphylaxis Treatment',
        category: 'Critical Care',
        description: 'Severe allergic reaction management',
        urgency: 'high',
        estimatedTime: '15-20 min',
        type: 'checklist',
        steps: [
            'Assess for signs: difficulty breathing, swelling, rash, hypotension',
            'Remove allergen if possible',
            'Position patient supine (or sitting if respiratory distress)',
            'Administer epinephrine 0.3-0.5mg IM (lateral thigh)',
            'High-flow oxygen via non-rebreather mask',
            'Establish large-bore IV access',
            'Normal saline bolus 20ml/kg',
            'Monitor vital signs continuously',
            'Prepare for potential intubation',
            'Consider diphenhydramine 25-50mg IV/IM',
            'Consider albuterol nebulizer for bronchospasm',
            'Rapid transport to emergency facility'
        ]
    },
    {
        id: 'stroke-assessment',
        name: 'Stroke Assessment (FAST)',
        category: 'Neurological',
        description: 'Rapid stroke identification protocol',
        urgency: 'high',
        estimatedTime: '5-10 min',
        type: 'checklist',
        steps: [
            'Face - Check for facial droop (ask to smile)',
            'Arms - Check for arm drift (raise both arms)',
            'Speech - Check for slurred speech (repeat phrase)',
            'Time - Note time of symptom onset',
            'Check blood glucose level',
            'Perform Cincinnati Stroke Scale',
            'Assess for contraindications to thrombolytics',
            'Keep NPO (nothing by mouth)',
            'Position with head elevated 30 degrees',
            'Avoid blood pressure reduction unless >220/120',
            'Establish IV access (avoid affected side)',
            'Rapid transport to stroke center'
        ]
    },
    {
        id: 'trauma-assessment',
        name: 'Trauma Assessment',
        category: 'Trauma',
        description: 'Primary and secondary trauma survey',
        urgency: 'high',
        estimatedTime: '10-15 min',
        type: 'guidance',
        steps: [
            'Scene safety and BSI precautions',
            'Primary Survey - ABCDE approach',
            'A - Airway with C-spine protection',
            'B - Breathing and ventilation assessment',
            'C - Circulation with hemorrhage control',
            'D - Disability (neurological status)',
            'E - Exposure/Environmental control',
            'Control major bleeding with direct pressure',
            'Secondary survey - head to toe assessment',
            'Obtain SAMPLE history',
            'Splint fractures after life threats addressed',
            'Package for transport with spinal precautions if indicated'
        ]
    },
    {
        id: 'diabetic-emergency',
        name: 'Diabetic Emergency',
        category: 'Medical',
        description: 'Hypoglycemia/hyperglycemia management',
        urgency: 'medium',
        estimatedTime: '10-15 min',
        type: 'guidance',
        steps: [
            'Check blood glucose level immediately',
            'If <70 mg/dL and conscious: oral glucose 15-20g',
            'If <70 mg/dL and unconscious: D50 25g IV or glucagon 1mg IM',
            'If >250 mg/dL: assess for DKA signs',
            'Check for ketones if available',
            'Establish IV access',
            'Normal saline 500-1000ml bolus if dehydrated',
            'Monitor mental status',
            'Recheck glucose in 15 minutes',
            'Assess for other causes of altered mental status',
            'Document all medications given',
            'Transport for further evaluation'
        ]
    },
    {
        id: 'respiratory-distress',
        name: 'Respiratory Distress',
        category: 'Respiratory',
        description: 'Acute respiratory distress management',
        urgency: 'high',
        estimatedTime: '15-20 min',
        type: 'checklist',
        steps: [
            'Position patient upright unless contraindicated',
            'High-flow oxygen to maintain SpO2 >94%',
            'Assess breath sounds bilaterally',
            'Check for JVD, pedal edema (CHF signs)',
            'Obtain 12-lead ECG if cardiac cause suspected',
            'CPAP if available and indicated',
            'Albuterol 2.5mg nebulizer for wheezing',
            'Consider epinephrine for suspected anaphylaxis',
            'Assist ventilations if inadequate',
            'Monitor ETCO2 if available',
            'IV access and cardiac monitoring',
            'Rapid transport maintaining position of comfort'
        ]
    },
    {
        id: 'seizure-management',
        name: 'Seizure Management',
        category: 'Neurological',
        description: 'Active seizure and postictal care',
        urgency: 'medium',
        estimatedTime: '10-15 min',
        type: 'guidance',
        steps: [
            'Ensure patient safety - remove hazards',
            'Do not restrain or insert anything in mouth',
            'Time the seizure duration',
            'Protect head with padding',
            'Administer oxygen via nasal cannula',
            'Check blood glucose when possible',
            'If seizure >5 min: midazolam 10mg IM or 5mg IN',
            'Alternative: diazepam 5-10mg IV/rectal',
            'Position lateral recumbent post-seizure',
            'Suction airway PRN',
            'Monitor vital signs and mental status',
            'Document seizure characteristics'
        ]
    },
    {
        id: 'chest-pain',
        name: 'Chest Pain Protocol',
        category: 'Cardiac',
        description: 'Acute coronary syndrome assessment',
        urgency: 'medium',
        estimatedTime: '15-20 min',
        type: 'checklist',
        steps: [
            'Obtain 12-lead ECG within 10 minutes',
            'Administer oxygen if SpO2 <94%',
            'Aspirin 324mg chewed (if not allergic)',
            'Nitroglycerin 0.4mg SL (if SBP >100)',
            'Establish IV access',
            'Pain assessment using 0-10 scale',
            'OPQRST pain assessment',
            'Obtain full set of vital signs',
            'Continuous cardiac monitoring',
            'Repeat ECG if symptoms change',
            'Consider fentanyl for pain if indicated',
            'Transmit ECG and notify receiving facility'
        ]
    },
    {
        id: 'obstetric-emergency',
        name: 'Obstetric Emergency',
        category: 'OB/GYN',
        description: 'Emergency childbirth and complications',
        urgency: 'high',
        estimatedTime: '20-30 min',
        type: 'guidance',
        steps: [
            'Determine gestational age and due date',
            'Time contractions (frequency and duration)',
            'Check for crowning or visible presenting part',
            'Position mother semi-recumbent',
            'Prepare OB kit and warm blankets',
            'If delivery imminent: support head as it delivers',
            'Check for nuchal cord, slip over head if loose',
            'Support body during delivery',
            'Dry and stimulate infant immediately',
            'Clamp and cut cord after 1-3 minutes',
            'APGAR score at 1 and 5 minutes',
            'Deliver placenta, save for inspection',
            'Massage uterus and monitor for bleeding'
        ]
    },
    {
        id: 'burns',
        name: 'Burn Management',
        category: 'Trauma',
        description: 'Thermal burn assessment and treatment',
        urgency: 'medium',
        estimatedTime: '15-20 min',
        type: 'checklist',
        steps: [
            'Stop burning process - remove from source',
            'Remove jewelry and non-adherent clothing',
            'Estimate TBSA using Rule of 9s',
            'Cool burns with room temperature water',
            'Cover burns with clean, dry dressing',
            'Do not apply ice or ointments',
            'Assess for inhalation injury signs',
            'High-flow oxygen for all significant burns',
            'IV access for burns >10% TBSA',
            'Fluid resuscitation per Parkland formula',
            'Pain management with narcotic analgesia',
            'Keep patient warm to prevent hypothermia'
        ]
    }
];

// Export additional utility functions
export function getProcedureById(id) {
    return procedureData.find(proc => proc.id === id);
}

export function getProceduresByCategory(category) {
    return procedureData.filter(proc => proc.category === category);
}

export function getProceduresByUrgency(urgency) {
    return procedureData.filter(proc => proc.urgency === urgency);
}