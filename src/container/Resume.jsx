import resumePdf from '../assets/Orinas.pdf';

function renderDownloadButton() {
  const url = URL.createObjectURL(resumePdf);
  return (
    <a href={url} download="Orina.pdf">
      Download Resume
    </a>
  );
}

return (
  <>
    {renderDownloadButton()}
  </>
);
