import { google } from 'googleapis';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, '..', process.env.GSHEET_API_FILE),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

export const submitPlan = async (req, res) => {
  try {
    const { name, email, phone, plan, price } = req.body;

    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:F',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[name, email, phone, plan, price, new Date().toLocaleString()]],
      },
    });

    res.status(200).json({ success: true, message: 'Data submitted to Google Sheet.' });
  } catch (error) {
    console.error('Google Sheets Error:', error.message);
    res.status(500).json({ success: false, message: 'Submission failed' });
  }
};
