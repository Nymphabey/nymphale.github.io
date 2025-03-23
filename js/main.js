
export default function downloadFile() {
    const link = document.createElement('a');
    link.href = 'CV_Charlery_Klara.pdf'; // Replace with the actual path to the file
    link.download = 'CV_Charlery_Klara.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }

