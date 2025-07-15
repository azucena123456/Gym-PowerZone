// SectionContactMap.styles.ts
import { CSSProperties } from 'react';

export const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#fff',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: '40px',
    width: '100%',
  },
  contactSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  locationSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: '26px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#111',
  },
  input: {
    border: '1px solid #ccc',
    borderRadius: '3px',
    padding: '14px',
    marginBottom: '20px',
    fontSize: '15px',
    width: '100%',
    boxSizing: 'border-box',
  },
  textarea: {
    border: '1px solid #ccc',
    borderRadius: '3px',
    padding: '14px',
    marginBottom: '20px',
    fontSize: '15px',
    height: '120px',
    resize: 'none',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#000',
    padding: '16px',
    borderRadius: '3px',
    textAlign: 'center',
    cursor: 'pointer',
    border: 'none',
  },
  buttonText: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
  },
  address: {
    fontSize: '15px',
    color: '#444',
    marginBottom: '25px',
  },
  mapContainer: {
    width: '100%',
    height: '250px',
    border: '1px solid #eee',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  mapLink: {
    color: '#0066cc',
    textDecoration: 'underline',
    cursor: 'pointer',
    marginTop: '10px',
    display: 'inline-block',
  },
};
