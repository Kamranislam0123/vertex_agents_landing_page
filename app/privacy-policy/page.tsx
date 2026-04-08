import fs from 'fs';
import path from 'path';
import LegalPageLayout from '../LegalPageLayout';

export default function PrivacyPolicy() {
  const filePath = path.join(process.cwd(), 'PRIVACY_POLICY.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <LegalPageLayout 
      title="Privacy Policy" 
      content={fileContent} 
    />
  );
}
