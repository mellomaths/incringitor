function calculateCringePoints(message, cringeWords) {
  const msg = message.toLowerCase();
  let cringePoints = 0;

  cringeWords.forEach(cw => {
    if (msg.includes(cw)) {
      cringePoints++;
    }
  });

  return cringePoints;
}

function rateCringe(cringePoints) {
  if (cringePoints === 0) {
    return 'Normie.';
  }

  if (cringePoints < 4) {
    return 'Cringe padrão, nada demais. Todo mundo solta um cringe uma hora ou outra.';
  }

  if (cringePoints < 7) {
    return 'Linha tênue do cringe. Você precisa se atentar.';
  }

  if (cringePoints < 10) {
    return 'Cringe++. Parece chat de jogador high elo de TFT.';
  }

  return 'Enquete do Cringe.';
}

module.exports = {
  calculateCringePoints,
  rateCringe,
};
