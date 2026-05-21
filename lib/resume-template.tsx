import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { PortfolioData } from '../types/portfolio';

// Register fonts if needed, otherwise use standard fonts
// Font.register({ family: 'Inter', src: 'https://fonts.gstatic.com/s/inter/v12/UcCOjFGCW6YXKz2nQ-YZqu25STZSOcY.woff2' });

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#333',
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#2563eb', // Blue matching the screenshot style
    paddingBottom: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e40af', // Dark blue
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  title: {
    fontSize: 14,
    color: '#4b5563',
    marginTop: 4,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 8,
    gap: 10,
    fontSize: 9,
    color: '#4b5563',
  },
  section: {
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e40af',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingBottom: 3,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  bio: {
    fontSize: 10,
    marginBottom: 10,
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  itemCompany: {
    color: '#2563eb',
    fontSize: 10,
    fontStyle: 'italic',
  },
  itemPeriod: {
    color: '#6b7280',
    fontSize: 9,
  },
  bulletList: {
    marginLeft: 10,
    marginTop: 3,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bullet: {
    width: 10,
  },
  bulletContent: {
    flex: 1,
  },
  skillsTable: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  skillsRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  skillsCategory: {
    width: '30%',
    padding: 5,
    backgroundColor: '#f9fafb',
    fontWeight: 'bold',
    color: '#1e40af',
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
  },
  skillsList: {
    width: '70%',
    padding: 5,
  },
  projectItem: {
    marginBottom: 8,
  },
  projectTitle: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  projectDetails: {
    fontSize: 9,
    color: '#4b5563',
  },
});

interface ResumeProps {
  data: PortfolioData;
  lang: 'en' | 'fr';
}

const labels = {
  en: {
    profile: 'Profile',
    education: 'Education',
    experience: 'Professional Experience',
    skills: 'Technical Skills',
    projects: 'Projects',
    certifications: 'Certifications',
  },
  fr: {
    profile: 'Profil',
    education: 'Formation',
    experience: 'Expérience Professionnelle',
    skills: 'Compétences Techniques',
    projects: 'Projets',
    certifications: 'Certifications',
  }
};

export const ResumeTemplate: React.FC<ResumeProps> = ({ data, lang }) => {
  const l = labels[lang];
  const { personalInfo, about, experience, projects, skills, education, certifications, socialLinks } = data;

  const github = socialLinks.find(s => s.platform === 'github')?.url?.replace('https://', '');
  const linkedin = socialLinks.find(s => s.platform === 'linkedin')?.url?.replace('https://', '');

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.fullName}</Text>
          <Text style={styles.title}>{personalInfo.title}</Text>
          <View style={styles.contactInfo}>
            <Text>{personalInfo.email}</Text>
            <Text>|</Text>
            <Text>{personalInfo.location}</Text>
            {github && (
              <>
                <Text>|</Text>
                <Text>GitHub: {github}</Text>
              </>
            )}
            {linkedin && (
              <>
                <Text>|</Text>
                <Text>LinkedIn: {linkedin}</Text>
              </>
            )}
          </View>
        </View>

        {/* Profile / About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.profile}</Text>
          {about.paragraphs.map((p, i) => (
            <Text key={i} style={styles.bio}>{p}</Text>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.education}</Text>
          {education.degrees.map((degree, i) => (
            <View key={i} style={styles.experienceItem}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{degree.title}</Text>
                <Text style={styles.itemPeriod}>{degree.period}</Text>
              </View>
              <Text style={styles.itemCompany}>{degree.institution}</Text>
              <Text style={{fontSize: 9, marginTop: 2}}>{degree.description}</Text>
            </View>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.experience}</Text>
          {experience.map((exp, i) => (
            <View key={i} style={styles.experienceItem}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{exp.title}</Text>
                <Text style={styles.itemPeriod}>{exp.period}</Text>
              </View>
              <Text style={styles.itemCompany}>{exp.company}</Text>
              <View style={styles.bulletList}>
                {exp.responsibilities.map((resp, idx) => (
                  <View key={idx} style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletContent}>{resp}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.skills}</Text>
          <View style={styles.skillsTable}>
            {skills.categories.map((cat, i) => (
              <View key={i} style={styles.skillsRow}>
                <View style={styles.skillsCategory}>
                  <Text>{cat.title}</Text>
                </View>
                <View style={styles.skillsList}>
                  <Text>{cat.skills.join(', ')}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Projects - Brief */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.projects}</Text>
          {projects.map((proj, i) => (
            <View key={i} style={styles.projectItem}>
              <Text style={styles.projectTitle}>{proj.title}</Text>
              <Text style={styles.projectDetails}>{proj.description}</Text>
            </View>
          ))}
        </View>

        {/* Certifications - Brief */}
        {certifications && certifications.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{l.certifications}</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10}}>
              {certifications.map((cert, i) => (
                <Text key={i} style={{fontSize: 9, width: '45%'}}>
                  • {cert.title} ({cert.issuer})
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};
