// Deterministic rule-based scoring service
function containsAny(text, arr) {
  const t = text.toLowerCase();
  return arr.some(k => t.includes(k.toLowerCase()));
}

function weightChecks(text) {
  let score = 0;
  const details = [];

  const checks = [
    {kw:[ 'fob','cif','incoterms' ], w:6, label:'Incoterms / FOB/CIF' },
    {kw:[ 'assay','assaying' ], w:8, label:'Assay mentioned' },
    {kw:[ 'sample' ], w:5, label:'Sample & testing' },
    {kw:[ 'deposit','advance','down payment' ], w:12, label:'Deposit requested' },
    {kw:[ 'payment','tt','bank' ], w:6, label:'Payment terms' },
    {kw:[ 'broker','agent' ], w:6, label:'Broker / agent' },
    {kw:[ 'urgent','immediately','asap' ], w:4, label:'Urgent language' },
    {kw:[ 'certificate' ], w:5, label:'Certificates' },
    {kw:[ 'inspection' ], w:5, label:'Inspection mentioned' },
  ];

  checks.forEach(c => {
    if (containsAny(text, c.kw)) {
      score += c.w;
      details.push(c.label);
    }
  });

  // Negative high-risk signals
  const negatives = [
    {kw:['cash','western union','wester union','moneygram'], w:16, label:'Insecure payment (cash / WU / Moneygram)' },
    {kw:['no bank','no bank details'], w:12, label:'Avoids bank payment' },
  ];
  negatives.forEach(n => {
    if (containsAny(text, n.kw)) {
      score += n.w;
      details.push(n.label);
    }
  });

  // Length heuristics
  const len = text.length;
  if (len < 80) { score += 14; details.push('Very short SCO') }
  else if (len < 220) { score += 8; details.push('Short SCO') }

  return {score, details};
}

function breakdownScores(text) {
  // Simple breakdown sections using keyword categories
  const structure = containsAny(text, ['format','header','subject','offer']) ? 85 : 60;
  const language = containsAny(text, ['please','thank','best','regards']) ? 70 : 60;
  const signatures = containsAny(text, ['signature','sincerely','yours']) ? 65 : 40;
  const metadata = containsAny(text, ['company','contact','phone','email']) ? 70 : 45;
  return { structure, language, signatures, metadata };
}

exports.scoreSCO = (scoText) => {
  const t = scoText || '';
  const { score, details } = weightChecks(t);
  const breakdown = breakdownScores(t);

  const riskScore = Math.min(100, Math.round(score));
  const explanation = generateRiskExplanation(riskScore);

  return {
    riskScore,
    breakdown,
    details: details.join('; ') || 'No clear signals found',
    explanation
  };
};

function generateRiskExplanation(score) {
  if (score <= 20) return 'Very low risk: SCO appears consistent and professional.';
  if (score <= 40) return 'Low risk: Minor inconsistencies or missing details.';
  if (score <= 60) return 'Medium risk: Several red flags that require verification.';
  if (score <= 80) return 'High risk: Strong indicators of potential problems.';
  return 'Very high risk: Classic fraud indicators present.';
}
