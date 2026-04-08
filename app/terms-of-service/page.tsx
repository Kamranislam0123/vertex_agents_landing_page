import fs from 'fs';
import path from 'path';
import LegalPageLayout from '../LegalPageLayout';

export default function TermsOfService() {
  const filePath = path.join(process.cwd(), 'TERMS_OF_SERVICE.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <LegalPageLayout 
      title="Terms of Service" 
      content={fileContent} 
    />
  );
}
