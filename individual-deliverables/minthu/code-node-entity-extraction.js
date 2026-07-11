const output = $input.first().json.output;

// Get user message
const userMessage = $('Webhook').first().json.body.user_message || '';

// Determine risk level
let riskLevel = 'Unknown';
if (output.includes('SCAM ALERT')) riskLevel = 'CRITICAL';
else if (output.includes('SUSPICIOUS')) riskLevel = 'SUSPICIOUS';
else if (output.includes('LIKELY SAFE') || output.includes('SAFE')) riskLevel = 'SAFE';

// Extract scam category
let category = 'Unknown';
const typeMatch = output.match(/[""]([^""]+)[""]/);
if (typeMatch) category = typeMatch[1];

// Extract entities ONLY from the user's original message
let entitiesList = [];

// Phone numbers (7-12 digits)
const phones = userMessage.match(/\b\d[\d\s-]{5,}\d\b/g);
if (phones) {
    phones.forEach(p => {
        const cleaned = p.replace(/[\s-]/g, '');
        if (cleaned.length >= 7 && cleaned.length <= 12) {
            entitiesList.push('Phone: ' + p.trim());
        }
    });
}

// URLs
const links = userMessage.match(/https?:\/\/[^\s"']+/gi);
if (links) entitiesList.push(...links.map(l => 'Link: ' + l));

// Domains without http
const domains = userMessage.match(/\b[a-zA-Z0-9-]+\.(com|org|net|sg|io|xyz|info|biz)\b[^\s]*/gi);
if (domains) entitiesList.push(...domains.map(d => 'Link: ' + d));

// Emails
const emails = userMessage.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
if (emails) entitiesList.push(...emails.map(e => 'Email: ' + e));

// Money
const money = userMessage.match(/(?:SGD|S\$|\$)\s*[\d,.]+/gi);
if (money) entitiesList.push(...money.map(m => 'Amount: ' + m));

// Remove duplicates
const entities = [...new Set(entitiesList)].join(', ') || 'None detected';

// Action
let action = 'Review AI verdict for guidance';
const actionMatch = output.match(/Do [Nn][Oo][Tt][^.!\n]+[.!]/);
if (actionMatch) action = actionMatch[0];

return [{
    json: {
        timestamp: new Date().toISOString(),
        user_message: userMessage,
        category: category,
        risk_level: riskLevel,
        entities: entities,
        action: action,
        ai_verdict: output
    }
}];
