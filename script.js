document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

function composeGmail() {
  // Replace 'your-email@example.com' with your actual email address
  var email = 'romaisa0157@gmail.com';

  // Replace 'Subject' and 'Body' with your desired subject and body text
  var subject = encodeURIComponent('Subject');
  var body = encodeURIComponent('Body');

  // Construct the Gmail compose URL
  var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + email + '&su=' + subject + '&body=' + body;

  // Open Gmail in a new window or tab
window.open(gmailUrl, '_blank');
   // Create an iframe and set its source to the Gmail compose URL
  //  var iframe = document.createElement('iframe');
  //  iframe.src = gmailUrl;
  //  iframe.style.width = '100%';
  //  iframe.style.height = '500px'; // You may adjust the height accordingly

  //  // Append the iframe to a container div in the page
  //  var container = document.getElementById('gmailComposeContainer');
  //  container.innerHTML = ''; // Clear existing content
  //  container.appendChild(iframe);
}