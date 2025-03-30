import React from 'react';
import {
  Container,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import {
  Security as SecurityIcon,
  Code as CodeIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import BranchCard from '../components/branches/BranchCard';

const branches = {
  network: {
    title: 'network',
    description: 'Network security focuses on protecting computer networks and their infrastructure.',
    tools: {
      wireshark: {
        name: 'Wireshark',
        description: 'Network protocol analyzer for troubleshooting and analysis.',
        features: [
          'Deep packet inspection',
          'Real-time packet capture',
          'Protocol analysis',
          'Network troubleshooting',
        ],
        benefits: [
          'Network visibility',
          'Security analysis',
          'Performance monitoring',
          'Protocol debugging',
        ],
      },
      nmap: {
        name: 'Nmap',
        description: 'Network mapping and security scanning tool.',
        features: [
          'Port scanning',
          'Service detection',
          'OS fingerprinting',
          'Network inventory',
        ],
        benefits: [
          'Security assessment',
          'Network discovery',
          'Vulnerability scanning',
          'System monitoring',
        ],
      },
    },
  },
  ethical: {
    title: 'ethical',
    description: 'Ethical hacking and penetration testing for security assessment.',
    tools: {
      metasploit: {
        name: 'Metasploit',
        description: 'Penetration testing framework for security testing.',
        features: [
          'Exploit development',
          'Payload generation',
          'Post-exploitation',
          'Module management',
        ],
        benefits: [
          'Security testing',
          'Vulnerability assessment',
          'Security research',
          'Training platform',
        ],
      },
      burp: {
        name: 'Burp Suite',
        description: 'Web application security testing platform.',
        features: [
          'Proxy interception',
          'Scanner',
          'Repeater',
          'Intruder',
        ],
        benefits: [
          'Web security testing',
          'Vulnerability scanning',
          'Manual testing',
          'Automation tools',
        ],
      },
    },
  },
  cloud: {
    title: 'cloud',
    description: 'Cloud security for protecting cloud-based infrastructure and services.',
    tools: {
      aws: {
        name: 'AWS Security Hub',
        description: 'Security and compliance management for AWS resources.',
        features: [
          'Security scoring',
          'Compliance monitoring',
          'Threat detection',
          'Security findings',
        ],
        benefits: [
          'Centralized security',
          'Compliance management',
          'Threat prevention',
          'Security automation',
        ],
      },
      azure: {
        name: 'Azure Security Center',
        description: 'Unified security management for Azure resources.',
        features: [
          'Security monitoring',
          'Policy management',
          'Threat protection',
          'Compliance reporting',
        ],
        benefits: [
          'Cloud security',
          'Compliance monitoring',
          'Threat detection',
          'Security management',
        ],
      },
    },
  },
  crypto: {
    title: 'crypto',
    description: 'Cryptography and encryption for secure data transmission.',
    tools: {
      openssl: {
        name: 'OpenSSL',
        description: 'Cryptography toolkit for SSL/TLS protocols.',
        features: [
          'SSL/TLS implementation',
          'Certificate management',
          'Encryption algorithms',
          'Hash functions',
        ],
        benefits: [
          'Secure communication',
          'Certificate handling',
          'Encryption support',
          'Cryptographic operations',
        ],
      },
      gpg: {
        name: 'GPG',
        description: 'GNU Privacy Guard for encryption and signing.',
        features: [
          'File encryption',
          'Digital signatures',
          'Key management',
          'Secure messaging',
        ],
        benefits: [
          'Data protection',
          'Identity verification',
          'Secure communication',
          'Key management',
        ],
      },
    },
  },
};

const CybersecurityBranches: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          color: 'primary.main',
          fontWeight: 'bold',
          mb: 6,
        }}
      >
        {t('branches.title')}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <BranchCard branch={branches.network} icon={<SecurityIcon />} />
        <BranchCard branch={branches.ethical} icon={<CodeIcon />} />
        <BranchCard branch={branches.cloud} icon={<CloudIcon />} />
        <BranchCard branch={branches.crypto} icon={<LockIcon />} />
      </Box>
    </Container>
  );
};

export default CybersecurityBranches; 