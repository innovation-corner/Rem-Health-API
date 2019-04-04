'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Vaccines', 
      [
        {
          childAge: 'At Birth',
          vaccineType: "HBV 1 (Hepatitis B vaccine), OPV 0 (Oral Polio Vaccine), BCG (Baccilli Calmette-Guerin)",
          disease: "Hepatitis B, Polio, Tuberculosis",
          status: true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          childAge: '6 Weeks',
          vaccineType: "OPV 1, Pentavalent 1 (5 in 1 vaccine for diphtheria, tetanus,  whooping cough, hepatitis B and Haemophilus Influenza type B), Rotavirus vaccine 1 (Rotarix 1)\
          , PCV 1(Pneumococcal conjugate vaccine 1)",
          disease: "Polio, Diphtheria, Tetanus, whooping cough, hepatitis B and Haemophilius Influenza type, Rotavirus, Pneumonia",
          status: true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          childAge: '10 Weeks',
          vaccineType: "OPV 2, Pentavalent 2, Rotarix 2, PCV 2",
          disease: "",
          status: true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          childAge: '14 Weeks',
          vaccineType: "OPV 3, Pentavalent 3, PCV 3",
          disease: "",
          status: true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          childAge: '6 Months',
          vaccineType: "Vitamin A (first dose)",
          disease: "Vitamin A deficiency",
          status: true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          childAge: '9 Months',
          vaccineType: "Measles Vaccine, Yellow Fever Vaccine",
          disease: "Measles and Yellow Fever",
          status: true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          childAge: '12-24 Months',
          vaccineType: "Meningitis Vaccine (Nimenrix), Vitamin A, OPV booster",
          disease: "Meningitis and Septicemia, Vitamin A deficiency, Polio",
          status: true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          childAge: '15-18 Months',
          vaccineType: "MMR, Chicken Pox Vaccine",
          disease: "Measles, Mumps and Rubella, Chicken pox (Varicella)",
          status: true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          childAge: '24 Months',
          vaccineType: "Typhoid vaccine ",
          disease: "Typhoid",
          status: true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          childAge: 'Girls aged 13 and above',
          vaccineType: "HPV vaccine (Cervarix)",
          disease: "Cervical cancer caused by Human Papilloma Virus (HPV)  types 16 and 18",
          status: true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
      ], 
    {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};