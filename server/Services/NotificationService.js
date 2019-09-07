module.exports = {
  async sixMonths(language, child, date) {
    let message;
    switch (language) {
      case "English":
        return (message = `Hi, your child ${child.name} 
        is due for IMMUNIZATION on ${date}. Vaccines include  (OPV 1, PCV 1, Pentavalent 1, Rotarix 1`);

      case "Igbo":
        return (message = `Ndewo, nwa gị bụ ${child.name}
        kwesịrị igba ọgwụ mgbochi ọrịa na ${date}. 
        Ọgwụ ndị gụnyere (OPV 1, PCV 1, Pentavalent 1, Rotarix 1`);

      case "Yoruba":
        return (message = `Asiko fun abere ajesara omo yin ${child.name} yo waye ni ${date}. Ajesara ( HBV 1, OPV  & BCG)`);
      case "Pidgin":
        return (message = `Howfa, ur pikin ${child.name} don due 4 immunization on ${date}, vaccines na ( HBV 1, OPV  & BCG) `);
      case "Hausa":
        return (message = `Sannu, ${child.name} ya kamata ya tafi immunization a ranar ${date}. 
        Alurar hada da ( HBV 1, OPV  & BCG) `);
      default:
        return (message = `Hi, your child, ${child.name} 
        is due for IMMUNIZATION on ${date}. Vaccines include  (OPV 1, PCV 1, Pentavalent 1, Rotarix 1`);
    }
  },

  async onRegistration(language, child, im) {
    let message;
    switch (language) {
      case "English":
        return (message = `Hi, ${child.name}'s birth has been registered successfully.His Immunization number is ${im}`);

      case "Pidgin":
        return (message = `Howfa, ${child.name} birth don register well, e immunization number na ${im}`);

      case "Igbo":
        return (message = `Ndewo, e  debere aha ${child.name} nke ọma. Nọmba ọgwụ mgbochi ya bụ ${im}`);

      case "Yoruba":
        return (message = `Ekaboo, ${child.name} ká ibi ti a ti aami-ni ifijišẹ. Nọmba ajesara rẹ ni ${im}`);

      case "Hausa":
        return (message = `Sannu, ${child.name} ya yi rajista sosai. Lambar shaidar rigakafi ita ce ${im}`);
    }
  },

  async atBirth(language, child, date) {
    let message;
    switch (language) {
      case "English":
        return (message = `Hi, your child ${child.name} is due for IMMUNIZATION on ${date}. 
        Vaccines include ( HBV 1, OPV  & BCG) `);

      case "Pidgin":
        return (message = `Howfa, ur pikin ${child.name} don due 4 immunization on ${date}, 
        vaccines na ( HBV 1, OPV  & BCG) `);

      case "Hausa":
        return (message = `Sannu, ${child.name} ya kamata ya tafi immunization a ranar ${date}. 
        Alurar hada da ( HBV 1, OPV  & BCG) `);

      case "Yoruba":
        return (message = `Asiko fun abere ajesara omo yin ${child.name} yo waye ni ${date}.
         Ajesara ( HBV 1, OPV  & BCG)`);

      case "Igbo":
        return (message = `Ndewo, nwa gị bụ ${child.name} kwesịrị igba ọgwụ mgbochi ọrịa na ${date}.
        Ọgwụ ndị gụnyere( HBV 1, OPV  & BCG) 
`);
    }
  }
};
