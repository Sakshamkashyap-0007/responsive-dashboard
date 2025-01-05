import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';

export const exportToCSV = (data, filename = 'report.csv') => {
  const csvContent = data.map(row => Object.values(row).join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, filename);
};

export const exportToPDF = (data, filename = 'report.pdf') => {
  const doc = new jsPDF();
  data.forEach((row, index) => {
    doc.text(Object.values(row).join(' '), 10, 10 + index * 10);
  });
  doc.save(filename);
};
