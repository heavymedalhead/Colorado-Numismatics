function typeWriterEffect(element, text, speed = 60) {
  element.innerHTML = "";
  element.style.display = "block";
  element.style.marginLeft = "auto";
  element.style.marginRight = "auto";
  element.style.width = "300px";
  element.style.textAlign = "left";
  element.style.color = "#D3BC8D";
  let chars = text.split("");
  let i = 0;
  function typeChar() {
    if (i < chars.length) {
      element.innerHTML += chars[i];
      i++;
      setTimeout(typeChar, speed);
    }
  }
  typeChar();
}

var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      // Use typeWriterEffect on the content
      typeWriterEffect(content, content.getAttribute("data-guide") || content.textContent);
      // Justify left
      content.style.textAlign = "left";
      // Set max width to 300px
      content.style.maxWidth = "300px";
    }
  });
}

function checkCombination() {
  var combination = ["81", "18", "76"];
  var pswd0Input = document.getElementById("pswd0");
  var pswd1Input = document.getElementById("pswd1");
  var pswd2Input = document.getElementById("pswd2");

  if (!pswd0Input || !pswd1Input || !pswd2Input) {
    showModalMessage("You died of dysentery.", "../../../index.html", "THE GUIDE SAYS:", "TRY AGAIN");
    return;
  }

  var password0 = pswd0Input.value;
  var password1 = pswd1Input.value;
  var password2 = pswd2Input.value;

  if (
    password0 === combination[0] &&
    password1 === combination[1] &&
    password2 === combination[2]
  ) {
    window.location.href = "vault_open.html";
  } else {
    showModalMessage("You died of dysentery.", "../../../index.html", "THE GUIDE SAYS:", "START OVER");
  }
}

function showModalMessage(message, redirectUrl, headerText, closeLabel) {
  var modal = document.getElementById('modalWrapper');
  if (!modal) {
    if (redirectUrl) window.location.href = redirectUrl;
    return;
  }
  var header = modal.querySelector('h3');
  var para = modal.querySelector('p');
  var close = document.getElementById('closeBtn');
  if (header) header.textContent = headerText || 'THE PORTER SAYS:';
  if (para) para.textContent = message;
  var finalCloseLabel = closeLabel || (redirectUrl ? 'LEAVE THE MUSEUM' : 'GOT IT');
  if (close) {
    close.textContent = finalCloseLabel;
    close.onclick = function() {
      modal.style.display = 'none';
      if (redirectUrl) window.location.href = redirectUrl;
    };
  }
  modal.style.display = 'flex';
}

function checkHandshake() {
  var handshake = ["colorado"];
  var handshake1Input = document.getElementById("handshake1");

  if (!handshake1Input) {
    showModalMessage("What in the wide Wide World of Sports is that? Ask around town for the secret handshake. Bring me a cold brew when you come back!", "../../../index.html");
    return;
  }

  var value = handshake1Input.value;
  if (value === handshake[0]) {
    window.location.href = "floor1.html";
  } else {
    showModalMessage("What in the wide Wide World of Sports is that? Ask around town for the secret handshake. Bring me a cold brew when you come back!", "../../../index.html");
  }
}



const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modalWrapper');

if (openBtn && modal) {
  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    // ensure default close label for modal opened from markup
    var close = document.getElementById('closeBtn');
    // Only set the default label when there isn't a custom one already present
    if (close) {
      var txt = (close.textContent || '').trim().toUpperCase();
      if (!txt || txt === 'GOT IT') close.textContent = 'GOT IT';
    }
    // If modal or close button specifies a data-redirect, set close to redirect there
    var redirect = modal.getAttribute('data-redirect') || (close && close.getAttribute('data-redirect'));
    if (close && redirect) {
      close.onclick = function() {
        modal.style.display = 'none';
        window.location.href = redirect;
      };
    }
  });
}

if (closeBtn && modal) {
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}