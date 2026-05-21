import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import { ResumeTemplate } from '../lib/resume-template';
import fs from 'fs';
import path from 'path';

async function generate() {
  const dataEn = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/portfolio-en.json'), 'utf-8'));
  const dataFr = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/portfolio-fr.json'), 'utf-8'));

  const docsDir = path.join(process.cwd(), 'public/documents');
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  console.log('Generating English resume...');
  await ReactPDF.renderToFile(
    React.createElement(ResumeTemplate, { data: dataEn, lang: 'en' }),
    path.join(docsDir, 'resume-en.pdf')
  );

  console.log('Generating French resume...');
  await ReactPDF.renderToFile(
    React.createElement(ResumeTemplate, { data: dataFr, lang: 'fr' }),
    path.join(docsDir, 'resume-fr.pdf')
  );

  console.log('Resumes generated successfully!');
}

generate().catch(console.error);
