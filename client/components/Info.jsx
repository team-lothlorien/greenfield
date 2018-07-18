import React from 'react';
import DoctorList from './DoctorList.jsx';
import Doctor from './Doctor.jsx';
class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [
    {
      "practices": [
        {
          "location_slug": "md-chevy-chase",
          "within_search_area": true,
          "distance": 248.1847098111624,
          "lat": 38.96479,
          "lon": -77.08836,
          "uid": "a148187643465431a93cf61ecec2f0eb",
          "name": "Inna London, MD",
          "accepts_new_patients": true,
          "insurance_uids": [
            "aetna-aetnamanagedchoiceposopenaccess",
            "aetna-aetnaselect",
            "aetna-aetnahmo",
            "aetna-aetnachoiceposii",
            "aetna-aetnasignatureadministratorsppo"
          ],
          "visit_address": {
            "city": "Chevy Chase",
            "lat": 38.96479,
            "lon": -77.08836,
            "state": "MD",
            "state_long": "Maryland",
            "street": "5530 Wisconsin Ave",
            "street2": "Ste 529",
            "zip": "20815"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "3018699776",
              "type": "landline"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        },
        {
          "location_slug": "md-gaithersburg",
          "within_search_area": true,
          "distance": 248.4533879809828,
          "lat": 39.12147,
          "lon": -77.17749,
          "uid": "3b8f42c55f34e8fc6d674c3f4ef065d8",
          "name": "Inna London",
          "accepts_new_patients": true,
          "insurance_uids": [
            "coventryhealthcare-coventryppode",
            "aetna-aetnaselect",
            "aetna-aetnamanagedchoiceposopenaccess",
            "aetna-aetnahmo",
            "bcbsbluecard-bcbsbluecardppo",
            "coventryhealthcare-coventrysouthernhealthppo",
            "cigna-cignahmo",
            "humana-humanachoicecarenetworkppo",
            "cigna-cignaopenaccessplus",
            "aetna-aetnachoiceposii",
            "cigna-cignappo",
            "aetna-aetnasignatureadministratorsppo",
            "carefirstbluecrossblueshield-carefirstbluechoiceadvantage",
            "carefirstbluecrossblueshield-carefirstbluechoicentwkpos",
            "carefirstbluecrossblueshield-carefirstbluepreferredppo",
            "carefirstbluecrossblueshield-carefirstmarylandpos",
            "gwhcigna-greatwestppo",
            "unitedhealthcare-uhcchoicepluspos",
            "unitedhealthcare-uhcnavigatehmo",
            "unitedhealthcare-uhcnavigatepos",
            "unitedhealthcare-uhcoptionsppo",
            "firsthealthcoventryhealthcare-firsthealthppo"
          ],
          "visit_address": {
            "city": "Gaithersburg",
            "lat": 39.12147,
            "lon": -77.17749,
            "state": "MD",
            "state_long": "Maryland",
            "street": "16220 Frederick Rd",
            "street2": "Ste 420",
            "zip": "20877"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "3013303359",
              "type": "fax"
            },
            {
              "number": "3013303335",
              "type": "landline"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        }
      ],
      "educations": [],
      "profile": {
        "first_name": "Inna",
        "last_name": "London",
        "slug": "inna-london-md",
        "title": "MD",
        "image_url": "https://asset2.betterdoctor.com/assets/general_doctor_female.png",
        "gender": "female",
        "languages": [
          {
            "name": "English",
            "code": "en"
          }
        ],
        "bio": "Specializing in adolescent medicine and pediatrics, Dr. Inna London, MD is one of the country's top rated doctors. She currently sees patients in Washington, District Of Columbia, Gaithersburg, Maryland, and Bethesda, Maryland.\n\nDr. London is licensed to treat patients in Maryland.\n\nDr. London is rated among the top 20% of doctors in the United States, based on her credentials, experience and network.\n\nDr. London has successfully passed a background check including a medical license verification (active) and screening for malpractice history (none found)."
      },
      "ratings": [
        {
          "active": true,
          "provider": "betterdoctor",
          "provider_uid": "162fbdd4a26b47a7fd34d5721da0991e",
          "rating": 4.5,
          "review_count": 0,
          "image_url_small": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-small-4.5.png",
          "image_url_small_2x": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-small-4.5@2x.png",
          "image_url_large": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-large-4.5.png",
          "image_url_large_2x": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-large-4.5@2x.png"
        }
      ],
      "insurances": [
        {
          "insurance_plan": {
            "uid": "aetna-aetnamanagedchoiceposopenaccess",
            "name": "Aetna Managed Choice POS Open Access",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnaselect",
            "name": "Aetna Select",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnahmo",
            "name": "Aetna HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnachoiceposii",
            "name": "Aetna Choice POS II",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnasignatureadministratorsppo",
            "name": "Aetna Signature Administrators PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "coventryhealthcare-coventryppode",
            "name": "Coventry PPO - DE",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnaselect",
            "name": "Aetna Select",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnamanagedchoiceposopenaccess",
            "name": "Aetna Managed Choice POS Open Access",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnahmo",
            "name": "Aetna HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "bcbsbluecard-bcbsbluecardppo",
            "name": "BCBS Blue Card PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "coventryhealthcare-coventrysouthernhealthppo",
            "name": "Coventry Southern Health PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignahmo",
            "name": "CIGNA HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "humana-humanachoicecarenetworkppo",
            "name": "Humana ChoiceCare Network PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "humana",
            "name": "Humana"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignaopenaccessplus",
            "name": "CIGNA Open Access Plus",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnachoiceposii",
            "name": "Aetna Choice POS II",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignappo",
            "name": "CIGNA PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnasignatureadministratorsppo",
            "name": "Aetna Signature Administrators PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluechoiceadvantage",
            "name": "CareFirst BlueChoice Advantage",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluechoicentwkpos",
            "name": "CareFirst BlueChoice Ntwk POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluepreferredppo",
            "name": "CareFirst BluePreferred PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstmarylandpos",
            "name": "CareFirst Maryland POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "gwhcigna-greatwestppo",
            "name": "Great West PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcchoicepluspos",
            "name": "UHC Choice Plus POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcnavigatehmo",
            "name": "UHC Navigate HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcnavigatepos",
            "name": "UHC Navigate POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcoptionsppo",
            "name": "UHC Options PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "firsthealthcoventryhealthcare-firsthealthppo",
            "name": "First Health PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        }
      ],
      "specialties": [
        {
          "uid": "adolescent-medicine-pediatrician",
          "name": "Adolescent Medicine",
          "description": "Specializes in the health of children from 9 to 14 years old.",
          "category": "medical",
          "actor": "Adolescent Medicine Pediatrician",
          "actors": "Adolescent Medicine Pediatricians"
        }
      ],
      "licenses": [
        {
          "state": "MD"
        },
        {
          "number": "D0061673",
          "state": "MD"
        }
      ],
      "uid": "162fbdd4a26b47a7fd34d5721da0991e",
      "npi": "1376501346"
    },
    {
      "practices": [
        {
          "location_slug": "md-chevy-chase",
          "within_search_area": true,
          "distance": 248.1847098111624,
          "lat": 38.96479,
          "lon": -77.08836,
          "uid": "a148187643465431a93cf61ecec2f0eb",
          "name": "Inna London, MD",
          "accepts_new_patients": true,
          "insurance_uids": [
            "aetna-aetnamanagedchoiceposopenaccess",
            "aetna-aetnaselect",
            "aetna-aetnahmo",
            "aetna-aetnachoiceposii",
            "aetna-aetnasignatureadministratorsppo"
          ],
          "visit_address": {
            "city": "Chevy Chase",
            "lat": 38.96479,
            "lon": -77.08836,
            "state": "MD",
            "state_long": "Maryland",
            "street": "5530 Wisconsin Ave",
            "street2": "Ste 529",
            "zip": "20815"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "3018699776",
              "type": "landline"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        },
        {
          "location_slug": "md-gaithersburg",
          "within_search_area": true,
          "distance": 248.4533879809828,
          "lat": 39.12147,
          "lon": -77.17749,
          "uid": "3b8f42c55f34e8fc6d674c3f4ef065d8",
          "name": "Inna London",
          "accepts_new_patients": true,
          "insurance_uids": [
            "coventryhealthcare-coventryppode",
            "aetna-aetnaselect",
            "aetna-aetnamanagedchoiceposopenaccess",
            "aetna-aetnahmo",
            "bcbsbluecard-bcbsbluecardppo",
            "coventryhealthcare-coventrysouthernhealthppo",
            "cigna-cignahmo",
            "humana-humanachoicecarenetworkppo",
            "cigna-cignaopenaccessplus",
            "aetna-aetnachoiceposii",
            "cigna-cignappo",
            "aetna-aetnasignatureadministratorsppo",
            "carefirstbluecrossblueshield-carefirstbluechoiceadvantage",
            "carefirstbluecrossblueshield-carefirstbluechoicentwkpos",
            "carefirstbluecrossblueshield-carefirstbluepreferredppo",
            "carefirstbluecrossblueshield-carefirstmarylandpos",
            "gwhcigna-greatwestppo",
            "unitedhealthcare-uhcchoicepluspos",
            "unitedhealthcare-uhcnavigatehmo",
            "unitedhealthcare-uhcnavigatepos",
            "unitedhealthcare-uhcoptionsppo",
            "firsthealthcoventryhealthcare-firsthealthppo"
          ],
          "visit_address": {
            "city": "Gaithersburg",
            "lat": 39.12147,
            "lon": -77.17749,
            "state": "MD",
            "state_long": "Maryland",
            "street": "16220 Frederick Rd",
            "street2": "Ste 420",
            "zip": "20877"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "3013303359",
              "type": "fax"
            },
            {
              "number": "3013303335",
              "type": "landline"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        }
      ],
      "educations": [],
      "profile": {
        "first_name": "Inna",
        "last_name": "London",
        "slug": "inna-london-md",
        "title": "MD",
        "image_url": "https://asset2.betterdoctor.com/assets/general_doctor_female.png",
        "gender": "female",
        "languages": [
          {
            "name": "English",
            "code": "en"
          }
        ],
        "bio": "Specializing in adolescent medicine and pediatrics, Dr. Inna London, MD is one of the country's top rated doctors. She currently sees patients in Washington, District Of Columbia, Gaithersburg, Maryland, and Bethesda, Maryland.\n\nDr. London is licensed to treat patients in Maryland.\n\nDr. London is rated among the top 20% of doctors in the United States, based on her credentials, experience and network.\n\nDr. London has successfully passed a background check including a medical license verification (active) and screening for malpractice history (none found)."
      },
      "ratings": [
        {
          "active": true,
          "provider": "betterdoctor",
          "provider_uid": "162fbdd4a26b47a7fd34d5721da0991e",
          "rating": 4.5,
          "review_count": 0,
          "image_url_small": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-small-4.5.png",
          "image_url_small_2x": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-small-4.5@2x.png",
          "image_url_large": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-large-4.5.png",
          "image_url_large_2x": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-large-4.5@2x.png"
        }
      ],
      "insurances": [
        {
          "insurance_plan": {
            "uid": "aetna-aetnamanagedchoiceposopenaccess",
            "name": "Aetna Managed Choice POS Open Access",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnaselect",
            "name": "Aetna Select",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnahmo",
            "name": "Aetna HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnachoiceposii",
            "name": "Aetna Choice POS II",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnasignatureadministratorsppo",
            "name": "Aetna Signature Administrators PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "coventryhealthcare-coventryppode",
            "name": "Coventry PPO - DE",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnaselect",
            "name": "Aetna Select",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnamanagedchoiceposopenaccess",
            "name": "Aetna Managed Choice POS Open Access",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnahmo",
            "name": "Aetna HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "bcbsbluecard-bcbsbluecardppo",
            "name": "BCBS Blue Card PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "coventryhealthcare-coventrysouthernhealthppo",
            "name": "Coventry Southern Health PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignahmo",
            "name": "CIGNA HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "humana-humanachoicecarenetworkppo",
            "name": "Humana ChoiceCare Network PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "humana",
            "name": "Humana"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignaopenaccessplus",
            "name": "CIGNA Open Access Plus",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnachoiceposii",
            "name": "Aetna Choice POS II",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignappo",
            "name": "CIGNA PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnasignatureadministratorsppo",
            "name": "Aetna Signature Administrators PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluechoiceadvantage",
            "name": "CareFirst BlueChoice Advantage",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluechoicentwkpos",
            "name": "CareFirst BlueChoice Ntwk POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluepreferredppo",
            "name": "CareFirst BluePreferred PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstmarylandpos",
            "name": "CareFirst Maryland POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "gwhcigna-greatwestppo",
            "name": "Great West PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcchoicepluspos",
            "name": "UHC Choice Plus POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcnavigatehmo",
            "name": "UHC Navigate HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcnavigatepos",
            "name": "UHC Navigate POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcoptionsppo",
            "name": "UHC Options PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "firsthealthcoventryhealthcare-firsthealthppo",
            "name": "First Health PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        }
      ],
      "specialties": [
        {
          "uid": "adolescent-medicine-pediatrician",
          "name": "Adolescent Medicine",
          "description": "Specializes in the health of children from 9 to 14 years old.",
          "category": "medical",
          "actor": "Adolescent Medicine Pediatrician",
          "actors": "Adolescent Medicine Pediatricians"
        }
      ],
      "licenses": [
        {
          "state": "MD"
        },
        {
          "number": "D0061673",
          "state": "MD"
        }
      ],
      "uid": "162fbdd4a26b47a7fd34d5721da0991e",
      "npi": "1376501346"
    },{
      "practices": [
        {
          "location_slug": "md-chevy-chase",
          "within_search_area": true,
          "distance": 248.1847098111624,
          "lat": 38.96479,
          "lon": -77.08836,
          "uid": "a148187643465431a93cf61ecec2f0eb",
          "name": "Inna London, MD",
          "accepts_new_patients": true,
          "insurance_uids": [
            "aetna-aetnamanagedchoiceposopenaccess",
            "aetna-aetnaselect",
            "aetna-aetnahmo",
            "aetna-aetnachoiceposii",
            "aetna-aetnasignatureadministratorsppo"
          ],
          "visit_address": {
            "city": "Chevy Chase",
            "lat": 38.96479,
            "lon": -77.08836,
            "state": "MD",
            "state_long": "Maryland",
            "street": "5530 Wisconsin Ave",
            "street2": "Ste 529",
            "zip": "20815"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "3018699776",
              "type": "landline"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        },
        {
          "location_slug": "md-gaithersburg",
          "within_search_area": true,
          "distance": 248.4533879809828,
          "lat": 39.12147,
          "lon": -77.17749,
          "uid": "3b8f42c55f34e8fc6d674c3f4ef065d8",
          "name": "Inna London",
          "accepts_new_patients": true,
          "insurance_uids": [
            "coventryhealthcare-coventryppode",
            "aetna-aetnaselect",
            "aetna-aetnamanagedchoiceposopenaccess",
            "aetna-aetnahmo",
            "bcbsbluecard-bcbsbluecardppo",
            "coventryhealthcare-coventrysouthernhealthppo",
            "cigna-cignahmo",
            "humana-humanachoicecarenetworkppo",
            "cigna-cignaopenaccessplus",
            "aetna-aetnachoiceposii",
            "cigna-cignappo",
            "aetna-aetnasignatureadministratorsppo",
            "carefirstbluecrossblueshield-carefirstbluechoiceadvantage",
            "carefirstbluecrossblueshield-carefirstbluechoicentwkpos",
            "carefirstbluecrossblueshield-carefirstbluepreferredppo",
            "carefirstbluecrossblueshield-carefirstmarylandpos",
            "gwhcigna-greatwestppo",
            "unitedhealthcare-uhcchoicepluspos",
            "unitedhealthcare-uhcnavigatehmo",
            "unitedhealthcare-uhcnavigatepos",
            "unitedhealthcare-uhcoptionsppo",
            "firsthealthcoventryhealthcare-firsthealthppo"
          ],
          "visit_address": {
            "city": "Gaithersburg",
            "lat": 39.12147,
            "lon": -77.17749,
            "state": "MD",
            "state_long": "Maryland",
            "street": "16220 Frederick Rd",
            "street2": "Ste 420",
            "zip": "20877"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "3013303359",
              "type": "fax"
            },
            {
              "number": "3013303335",
              "type": "landline"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        }
      ],
      "educations": [],
      "profile": {
        "first_name": "Inna",
        "last_name": "London",
        "slug": "inna-london-md",
        "title": "MD",
        "image_url": "https://asset2.betterdoctor.com/assets/general_doctor_female.png",
        "gender": "female",
        "languages": [
          {
            "name": "English",
            "code": "en"
          }
        ],
        "bio": "Specializing in adolescent medicine and pediatrics, Dr. Inna London, MD is one of the country's top rated doctors. She currently sees patients in Washington, District Of Columbia, Gaithersburg, Maryland, and Bethesda, Maryland.\n\nDr. London is licensed to treat patients in Maryland.\n\nDr. London is rated among the top 20% of doctors in the United States, based on her credentials, experience and network.\n\nDr. London has successfully passed a background check including a medical license verification (active) and screening for malpractice history (none found)."
      },
      "ratings": [
        {
          "active": true,
          "provider": "betterdoctor",
          "provider_uid": "162fbdd4a26b47a7fd34d5721da0991e",
          "rating": 4.5,
          "review_count": 0,
          "image_url_small": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-small-4.5.png",
          "image_url_small_2x": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-small-4.5@2x.png",
          "image_url_large": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-large-4.5.png",
          "image_url_large_2x": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-large-4.5@2x.png"
        }
      ],
      "insurances": [
        {
          "insurance_plan": {
            "uid": "aetna-aetnamanagedchoiceposopenaccess",
            "name": "Aetna Managed Choice POS Open Access",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnaselect",
            "name": "Aetna Select",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnahmo",
            "name": "Aetna HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnachoiceposii",
            "name": "Aetna Choice POS II",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnasignatureadministratorsppo",
            "name": "Aetna Signature Administrators PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "coventryhealthcare-coventryppode",
            "name": "Coventry PPO - DE",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnaselect",
            "name": "Aetna Select",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnamanagedchoiceposopenaccess",
            "name": "Aetna Managed Choice POS Open Access",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnahmo",
            "name": "Aetna HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "bcbsbluecard-bcbsbluecardppo",
            "name": "BCBS Blue Card PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "coventryhealthcare-coventrysouthernhealthppo",
            "name": "Coventry Southern Health PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignahmo",
            "name": "CIGNA HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "humana-humanachoicecarenetworkppo",
            "name": "Humana ChoiceCare Network PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "humana",
            "name": "Humana"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignaopenaccessplus",
            "name": "CIGNA Open Access Plus",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnachoiceposii",
            "name": "Aetna Choice POS II",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignappo",
            "name": "CIGNA PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnasignatureadministratorsppo",
            "name": "Aetna Signature Administrators PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluechoiceadvantage",
            "name": "CareFirst BlueChoice Advantage",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluechoicentwkpos",
            "name": "CareFirst BlueChoice Ntwk POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluepreferredppo",
            "name": "CareFirst BluePreferred PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstmarylandpos",
            "name": "CareFirst Maryland POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "gwhcigna-greatwestppo",
            "name": "Great West PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcchoicepluspos",
            "name": "UHC Choice Plus POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcnavigatehmo",
            "name": "UHC Navigate HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcnavigatepos",
            "name": "UHC Navigate POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcoptionsppo",
            "name": "UHC Options PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "firsthealthcoventryhealthcare-firsthealthppo",
            "name": "First Health PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        }
      ],
      "specialties": [
        {
          "uid": "adolescent-medicine-pediatrician",
          "name": "Adolescent Medicine",
          "description": "Specializes in the health of children from 9 to 14 years old.",
          "category": "medical",
          "actor": "Adolescent Medicine Pediatrician",
          "actors": "Adolescent Medicine Pediatricians"
        }
      ],
      "licenses": [
        {
          "state": "MD"
        },
        {
          "number": "D0061673",
          "state": "MD"
        }
      ],
      "uid": "162fbdd4a26b47a7fd34d5721da0991e",
      "npi": "1376501346"
    },
    {
      "practices": [
        {
          "location_slug": "md-chevy-chase",
          "within_search_area": true,
          "distance": 248.1847098111624,
          "lat": 38.96479,
          "lon": -77.08836,
          "uid": "a148187643465431a93cf61ecec2f0eb",
          "name": "Inna London, MD",
          "accepts_new_patients": true,
          "insurance_uids": [
            "aetna-aetnamanagedchoiceposopenaccess",
            "aetna-aetnaselect",
            "aetna-aetnahmo",
            "aetna-aetnachoiceposii",
            "aetna-aetnasignatureadministratorsppo"
          ],
          "visit_address": {
            "city": "Chevy Chase",
            "lat": 38.96479,
            "lon": -77.08836,
            "state": "MD",
            "state_long": "Maryland",
            "street": "5530 Wisconsin Ave",
            "street2": "Ste 529",
            "zip": "20815"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "3018699776",
              "type": "landline"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        },
        {
          "location_slug": "md-gaithersburg",
          "within_search_area": true,
          "distance": 248.4533879809828,
          "lat": 39.12147,
          "lon": -77.17749,
          "uid": "3b8f42c55f34e8fc6d674c3f4ef065d8",
          "name": "Inna London",
          "accepts_new_patients": true,
          "insurance_uids": [
            "coventryhealthcare-coventryppode",
            "aetna-aetnaselect",
            "aetna-aetnamanagedchoiceposopenaccess",
            "aetna-aetnahmo",
            "bcbsbluecard-bcbsbluecardppo",
            "coventryhealthcare-coventrysouthernhealthppo",
            "cigna-cignahmo",
            "humana-humanachoicecarenetworkppo",
            "cigna-cignaopenaccessplus",
            "aetna-aetnachoiceposii",
            "cigna-cignappo",
            "aetna-aetnasignatureadministratorsppo",
            "carefirstbluecrossblueshield-carefirstbluechoiceadvantage",
            "carefirstbluecrossblueshield-carefirstbluechoicentwkpos",
            "carefirstbluecrossblueshield-carefirstbluepreferredppo",
            "carefirstbluecrossblueshield-carefirstmarylandpos",
            "gwhcigna-greatwestppo",
            "unitedhealthcare-uhcchoicepluspos",
            "unitedhealthcare-uhcnavigatehmo",
            "unitedhealthcare-uhcnavigatepos",
            "unitedhealthcare-uhcoptionsppo",
            "firsthealthcoventryhealthcare-firsthealthppo"
          ],
          "visit_address": {
            "city": "Gaithersburg",
            "lat": 39.12147,
            "lon": -77.17749,
            "state": "MD",
            "state_long": "Maryland",
            "street": "16220 Frederick Rd",
            "street2": "Ste 420",
            "zip": "20877"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "3013303359",
              "type": "fax"
            },
            {
              "number": "3013303335",
              "type": "landline"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        }
      ],
      "educations": [],
      "profile": {
        "first_name": "Inna",
        "last_name": "London",
        "slug": "inna-london-md",
        "title": "MD",
        "image_url": "https://asset2.betterdoctor.com/assets/general_doctor_female.png",
        "gender": "female",
        "languages": [
          {
            "name": "English",
            "code": "en"
          }
        ],
        "bio": "Specializing in adolescent medicine and pediatrics, Dr. Inna London, MD is one of the country's top rated doctors. She currently sees patients in Washington, District Of Columbia, Gaithersburg, Maryland, and Bethesda, Maryland.\n\nDr. London is licensed to treat patients in Maryland.\n\nDr. London is rated among the top 20% of doctors in the United States, based on her credentials, experience and network.\n\nDr. London has successfully passed a background check including a medical license verification (active) and screening for malpractice history (none found)."
      },
      "ratings": [
        {
          "active": true,
          "provider": "betterdoctor",
          "provider_uid": "162fbdd4a26b47a7fd34d5721da0991e",
          "rating": 4.5,
          "review_count": 0,
          "image_url_small": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-small-4.5.png",
          "image_url_small_2x": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-small-4.5@2x.png",
          "image_url_large": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-large-4.5.png",
          "image_url_large_2x": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-large-4.5@2x.png"
        }
      ],
      "insurances": [
        {
          "insurance_plan": {
            "uid": "aetna-aetnamanagedchoiceposopenaccess",
            "name": "Aetna Managed Choice POS Open Access",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnaselect",
            "name": "Aetna Select",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnahmo",
            "name": "Aetna HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnachoiceposii",
            "name": "Aetna Choice POS II",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnasignatureadministratorsppo",
            "name": "Aetna Signature Administrators PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "coventryhealthcare-coventryppode",
            "name": "Coventry PPO - DE",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnaselect",
            "name": "Aetna Select",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnamanagedchoiceposopenaccess",
            "name": "Aetna Managed Choice POS Open Access",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnahmo",
            "name": "Aetna HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "bcbsbluecard-bcbsbluecardppo",
            "name": "BCBS Blue Card PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "coventryhealthcare-coventrysouthernhealthppo",
            "name": "Coventry Southern Health PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignahmo",
            "name": "CIGNA HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "humana-humanachoicecarenetworkppo",
            "name": "Humana ChoiceCare Network PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "humana",
            "name": "Humana"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignaopenaccessplus",
            "name": "CIGNA Open Access Plus",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnachoiceposii",
            "name": "Aetna Choice POS II",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignappo",
            "name": "CIGNA PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnasignatureadministratorsppo",
            "name": "Aetna Signature Administrators PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluechoiceadvantage",
            "name": "CareFirst BlueChoice Advantage",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluechoicentwkpos",
            "name": "CareFirst BlueChoice Ntwk POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluepreferredppo",
            "name": "CareFirst BluePreferred PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstmarylandpos",
            "name": "CareFirst Maryland POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "gwhcigna-greatwestppo",
            "name": "Great West PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcchoicepluspos",
            "name": "UHC Choice Plus POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcnavigatehmo",
            "name": "UHC Navigate HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcnavigatepos",
            "name": "UHC Navigate POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcoptionsppo",
            "name": "UHC Options PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "firsthealthcoventryhealthcare-firsthealthppo",
            "name": "First Health PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        }
      ],
      "specialties": [
        {
          "uid": "adolescent-medicine-pediatrician",
          "name": "Adolescent Medicine",
          "description": "Specializes in the health of children from 9 to 14 years old.",
          "category": "medical",
          "actor": "Adolescent Medicine Pediatrician",
          "actors": "Adolescent Medicine Pediatricians"
        }
      ],
      "licenses": [
        {
          "state": "MD"
        },
        {
          "number": "D0061673",
          "state": "MD"
        }
      ],
      "uid": "162fbdd4a26b47a7fd34d5721da0991e",
      "npi": "1376501346"
    },
    {
      "practices": [
        {
          "location_slug": "md-chevy-chase",
          "within_search_area": true,
          "distance": 248.1847098111624,
          "lat": 38.96479,
          "lon": -77.08836,
          "uid": "a148187643465431a93cf61ecec2f0eb",
          "name": "Inna London, MD",
          "accepts_new_patients": true,
          "insurance_uids": [
            "aetna-aetnamanagedchoiceposopenaccess",
            "aetna-aetnaselect",
            "aetna-aetnahmo",
            "aetna-aetnachoiceposii",
            "aetna-aetnasignatureadministratorsppo"
          ],
          "visit_address": {
            "city": "Chevy Chase",
            "lat": 38.96479,
            "lon": -77.08836,
            "state": "MD",
            "state_long": "Maryland",
            "street": "5530 Wisconsin Ave",
            "street2": "Ste 529",
            "zip": "20815"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "3018699776",
              "type": "landline"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        },
        {
          "location_slug": "md-gaithersburg",
          "within_search_area": true,
          "distance": 248.4533879809828,
          "lat": 39.12147,
          "lon": -77.17749,
          "uid": "3b8f42c55f34e8fc6d674c3f4ef065d8",
          "name": "Inna London",
          "accepts_new_patients": true,
          "insurance_uids": [
            "coventryhealthcare-coventryppode",
            "aetna-aetnaselect",
            "aetna-aetnamanagedchoiceposopenaccess",
            "aetna-aetnahmo",
            "bcbsbluecard-bcbsbluecardppo",
            "coventryhealthcare-coventrysouthernhealthppo",
            "cigna-cignahmo",
            "humana-humanachoicecarenetworkppo",
            "cigna-cignaopenaccessplus",
            "aetna-aetnachoiceposii",
            "cigna-cignappo",
            "aetna-aetnasignatureadministratorsppo",
            "carefirstbluecrossblueshield-carefirstbluechoiceadvantage",
            "carefirstbluecrossblueshield-carefirstbluechoicentwkpos",
            "carefirstbluecrossblueshield-carefirstbluepreferredppo",
            "carefirstbluecrossblueshield-carefirstmarylandpos",
            "gwhcigna-greatwestppo",
            "unitedhealthcare-uhcchoicepluspos",
            "unitedhealthcare-uhcnavigatehmo",
            "unitedhealthcare-uhcnavigatepos",
            "unitedhealthcare-uhcoptionsppo",
            "firsthealthcoventryhealthcare-firsthealthppo"
          ],
          "visit_address": {
            "city": "Gaithersburg",
            "lat": 39.12147,
            "lon": -77.17749,
            "state": "MD",
            "state_long": "Maryland",
            "street": "16220 Frederick Rd",
            "street2": "Ste 420",
            "zip": "20877"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "3013303359",
              "type": "fax"
            },
            {
              "number": "3013303335",
              "type": "landline"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        }
      ],
      "educations": [],
      "profile": {
        "first_name": "Inna",
        "last_name": "London",
        "slug": "inna-london-md",
        "title": "MD",
        "image_url": "https://asset2.betterdoctor.com/assets/general_doctor_female.png",
        "gender": "female",
        "languages": [
          {
            "name": "English",
            "code": "en"
          }
        ],
        "bio": "Specializing in adolescent medicine and pediatrics, Dr. Inna London, MD is one of the country's top rated doctors. She currently sees patients in Washington, District Of Columbia, Gaithersburg, Maryland, and Bethesda, Maryland.\n\nDr. London is licensed to treat patients in Maryland.\n\nDr. London is rated among the top 20% of doctors in the United States, based on her credentials, experience and network.\n\nDr. London has successfully passed a background check including a medical license verification (active) and screening for malpractice history (none found)."
      },
      "ratings": [
        {
          "active": true,
          "provider": "betterdoctor",
          "provider_uid": "162fbdd4a26b47a7fd34d5721da0991e",
          "rating": 4.5,
          "review_count": 0,
          "image_url_small": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-small-4.5.png",
          "image_url_small_2x": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-small-4.5@2x.png",
          "image_url_large": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-large-4.5.png",
          "image_url_large_2x": "https://asset2.betterdoctor.com/assets/consumer/stars/stars-large-4.5@2x.png"
        }
      ],
      "insurances": [
        {
          "insurance_plan": {
            "uid": "aetna-aetnamanagedchoiceposopenaccess",
            "name": "Aetna Managed Choice POS Open Access",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnaselect",
            "name": "Aetna Select",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnahmo",
            "name": "Aetna HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnachoiceposii",
            "name": "Aetna Choice POS II",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnasignatureadministratorsppo",
            "name": "Aetna Signature Administrators PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "coventryhealthcare-coventryppode",
            "name": "Coventry PPO - DE",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnaselect",
            "name": "Aetna Select",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnamanagedchoiceposopenaccess",
            "name": "Aetna Managed Choice POS Open Access",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnahmo",
            "name": "Aetna HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "bcbsbluecard-bcbsbluecardppo",
            "name": "BCBS Blue Card PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "coventryhealthcare-coventrysouthernhealthppo",
            "name": "Coventry Southern Health PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignahmo",
            "name": "CIGNA HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "humana-humanachoicecarenetworkppo",
            "name": "Humana ChoiceCare Network PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "humana",
            "name": "Humana"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignaopenaccessplus",
            "name": "CIGNA Open Access Plus",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnachoiceposii",
            "name": "Aetna Choice POS II",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "cigna-cignappo",
            "name": "CIGNA PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "aetna-aetnasignatureadministratorsppo",
            "name": "Aetna Signature Administrators PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluechoiceadvantage",
            "name": "CareFirst BlueChoice Advantage",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluechoicentwkpos",
            "name": "CareFirst BlueChoice Ntwk POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstbluepreferredppo",
            "name": "CareFirst BluePreferred PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "carefirstbluecrossblueshield-carefirstmarylandpos",
            "name": "CareFirst Maryland POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "bcbs",
            "name": "BCBS"
          }
        },
        {
          "insurance_plan": {
            "uid": "gwhcigna-greatwestppo",
            "name": "Great West PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "cigna",
            "name": "Cigna"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcchoicepluspos",
            "name": "UHC Choice Plus POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcnavigatehmo",
            "name": "UHC Navigate HMO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcnavigatepos",
            "name": "UHC Navigate POS",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedhealthcare-uhcoptionsppo",
            "name": "UHC Options PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedhealthcare",
            "name": "United Healthcare"
          }
        },
        {
          "insurance_plan": {
            "uid": "firsthealthcoventryhealthcare-firsthealthppo",
            "name": "First Health PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "aetna",
            "name": "Aetna"
          }
        }
      ],
      "specialties": [
        {
          "uid": "adolescent-medicine-pediatrician",
          "name": "Adolescent Medicine",
          "description": "Specializes in the health of children from 9 to 14 years old.",
          "category": "medical",
          "actor": "Adolescent Medicine Pediatrician",
          "actors": "Adolescent Medicine Pediatricians"
        }
      ],
      "licenses": [
        {
          "state": "MD"
        },
        {
          "number": "D0061673",
          "state": "MD"
        }
      ],
      "uid": "162fbdd4a26b47a7fd34d5721da0991e",
      "npi": "1376501346"
    }
  ]
    };
  }

  onClick(doctor){
    this.setState({doctors: [doctor]})
  }

  render() {
    if (this.state.doctors.length > 1) {
      return (<DoctorList doctors={this.state.doctors} onClick={this.onClick.bind(this)}/>);
    } else if (this.state.doctors.length === 1) {
      return (<Doctor doctor={this.state.doctors[0]} />)
    } else {
      return (<div id="land">Landing view</div>)
    }
  }

}

export default Info;
