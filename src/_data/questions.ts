import { KBA_JSON } from "../parser";


/*                  TUI Identities
 ====================================================== */

export const THOMAS = {
	"authToken": "9C59BFE0-8818-4721-A6A7-A18470537C7A",
	"provider": "tui",
	"questions": [
		{
			"id": "47128134",
			"text": "What state was your social security number issued (this could be the state in which you were born or had your first job)?",
			"answers": [
				{
					"id": "3070585112",
					"text": "Alabama"
				},
				{
					"id": "3070585114",
					"text": "Connecticut"
				},
				{
					"id": "3070585116",
					"text": "Idaho"
				},
				{
					"id": "3070585118",
					"text": "New Hampshire"
				},
				{
					"id": "3070585120",
					"text": "None of the Above"
				}
			]
		},
		{
			"id": "47128136",
			"text": "What is the monthly payment of your most recent mortgage?",
			"answers": [
				{
					"id": "3070585122",
					"text": "$ 1501 - $ 2000"
				},
				{
					"id": "3070585124",
					"text": "$ 2001 - $ 2500"
				},
				{
					"id": "3070585126",
					"text": "$ 3001 - $ 3500"
				},
				{
					"id": "3070585128",
					"text": "$ 3501 - $ 4000"
				},
				{
					"id": "3070585130",
					"text": "None of the Above"
				}
			]
		},
		{
			"id": "47128138",
			"text": "Which of these street names are you associated with?",
			"answers": [
				{
					"id": "3070585132",
					"text": "Bond"
				},
				{
					"id": "3070585134",
					"text": "Fairbanks"
				},
				{
					"id": "3070585136",
					"text": "Harding"
				},
				{
					"id": "3070585138",
					"text": "Independence"
				},
				{
					"id": "3070585140",
					"text": "None of the Above"
				}
			]
		}
	]
};

export const KIMBERLY = {
	"authToken": "69F29943-A133-4A2E-A303-171E1D6DFEE2",
	"provider": "tui",
	"questions": [
		{
			"id": "47128146",
			"text": "What is the monthly payment of your most recent auto loan or lease?",
			"answers": [
				{
					"id": "3070585172",
					"text": "$ 101 - $ 200"
				},
				{
					"id": "3070585174",
					"text": "$ 201 - $ 300"
				},
				{
					"id": "3070585176",
					"text": "$ 301 - $ 400"
				},
				{
					"id": "3070585178",
					"text": "$ 501 - $ 600"
				},
				{
					"id": "3070585180",
					"text": "None of the Above"
				}
			]
		},
		{
			"id": "47128148",
			"text": "What state was your social security number issued (this could be the state in which you were born or had your first job)?",
			"answers": [
				{
					"id": "3070585182",
					"text": "Alabama"
				},
				{
					"id": "3070585184",
					"text": "Iowa"
				},
				{
					"id": "3070585186",
					"text": "Louisiana"
				},
				{
					"id": "3070585188",
					"text": "New Hampshire"
				},
				{
					"id": "3070585190",
					"text": "None of the Above"
				}
			]
		},
		{
			"id": "47128150",
			"text": "Which of the following is a current or previous employer?",
			"answers": [
				{
					"id": "3070585192",
					"text": "Adobe Systems"
				},
				{
					"id": "3070585194",
					"text": "Iec"
				},
				{
					"id": "3070585196",
					"text": "Wal-Mart"
				},
				{
					"id": "3070585198",
					"text": "Whole Foods Market"
				},
				{
					"id": "3070585200",
					"text": "None of the Above"
				}
			]
		}
	]
};


/*              EFX and EXP Identities
 ====================================================== */

export const MARIA: KBA_JSON = {
	"authToken": "2E2B18F9-2539-421F-A4F3-E8D2BF1D870E",
	"provider": "efx",
	"questions": [
		{
			"id": "1",
			"text": "Your credit file indicates you may have an auto loan/lease, opened in or around March 2015. Who is the credit provider for this account?",
			"answers": [
				{
					"id": "1",
					"text": "AMSOUTH BANK",
					"correctAnswer": "false"
				},
				{
					"id": "2",
					"text": "BANK OF AMERICA",
					"correctAnswer": "false"
				},
				{
					"id": "3",
					"text": "E-LOAN",
					"correctAnswer": "false"
				},
				{
					"id": "4",
					"text": "THE HERB CHAMBERS COMPANIES",
					"correctAnswer": "false"
				},
				{
					"id": "5",
					"text": "NONE OF THE ABOVE",
					"correctAnswer": "true"
				}
			]
		},
		{
			"id": "2",
			"text": "What is the total monthly payment for the above-referenced account?",
			"answers": [
				{
					"id": "1",
					"text": "$675 - $724",
					"correctAnswer": "false"
				},
				{
					"id": "2",
					"text": "$725 - $774",
					"correctAnswer": "false"
				},
				{
					"id": "3",
					"text": "$775 - $824",
					"correctAnswer": "false"
				},
				{
					"id": "4",
					"text": "$825 - $874",
					"correctAnswer": "false"
				},
				{
					"id": "5",
					"text": "NONE OF THE ABOVE",
					"correctAnswer": "true"
				}
			]
		},
		{
			"id": "3",
			"text": "Your credit file indicates you may have an installment account (personal loans, electronic/appliance accounts, jeweler accounts, auto loans, etc.), opened in or around February 2016. Who is the credit provider for this account?",
			"answers": [
				{
					"id": "1",
					"text": "1ST UNITED SERVICES CU",
					"correctAnswer": "false"
				},
				{
					"id": "2",
					"text": "PEOPLE'S UNITED FINANCIAL, INC.",
					"correctAnswer": "false"
				},
				{
					"id": "3",
					"text": "SUMMIT BANK",
					"correctAnswer": "false"
				},
				{
					"id": "4",
					"text": "XEROX CU",
					"correctAnswer": "false"
				},
				{
					"id": "5",
					"text": "NONE OF THE ABOVE",
					"correctAnswer": "true"
				}
			]
		},
		{
			"id": "4",
			"text": "What is the total monthly payment for the above-referenced account?",
			"answers": [
				{
					"id": "1",
					"text": "$650 - $699",
					"correctAnswer": "false"
				},
				{
					"id": "2",
					"text": "$700 - $749",
					"correctAnswer": "false"
				},
				{
					"id": "3",
					"text": "$750 - $799",
					"correctAnswer": "false"
				},
				{
					"id": "4",
					"text": "$800 - $849",
					"correctAnswer": "false"
				},
				{
					"id": "5",
					"text": "NONE OF THE ABOVE",
					"correctAnswer": "true"
				}
			]
		}
	]
};

export const DONALD: KBA_JSON = {
	"authToken": "611AD6EE-CCCB-4310-B2CF-4B88F5A23D0E",
	"provider": "efx",
	"questions": [
		{
			"id": "1",
			"text": "Your credit file indicates you may have an auto loan/lease, opened in or around August 2016. Who is the credit provider for this account?",
			"answers": [
				{
					"id": "1",
					"text": "DORAL FINANCIAL",
					"correctAnswer": "false"
				},
				{
					"id": "2",
					"text": "E-LOAN",
					"correctAnswer": "false"
				},
				{
					"id": "3",
					"text": "KEY AUTO FINANCE",
					"correctAnswer": "false"
				},
				{
					"id": "4",
					"text": "VALLEY AUTO MALL INCORPORATED",
					"correctAnswer": "false"
				},
				{
					"id": "5",
					"text": "NONE OF THE ABOVE",
					"correctAnswer": "true"
				}
			]
		},
		{
			"id": "2",
			"text": "What is the total monthly payment for the above-referenced account?",
			"answers": [
				{
					"id": "1",
					"text": "$450 - $499",
					"correctAnswer": "false"
				},
				{
					"id": "2",
					"text": "$500 - $549",
					"correctAnswer": "false"
				},
				{
					"id": "3",
					"text": "$550 - $599",
					"correctAnswer": "false"
				},
				{
					"id": "4",
					"text": "$600 - $649",
					"correctAnswer": "false"
				},
				{
					"id": "5",
					"text": "NONE OF THE ABOVE",
					"correctAnswer": "true"
				}
			]
		},
		{
			"id": "3",
			"text": "Your credit file indicates you may have an installment account (personal loans, electronic/appliance accounts, jeweler accounts, auto loans, etc.), opened in or around May 2015. Who is the credit provider for this account?",
			"answers": [
				{
					"id": "1",
					"text": "DORAL FINANCIAL",
					"correctAnswer": "false"
				},
				{
					"id": "2",
					"text": "GREENPOINT",
					"correctAnswer": "false"
				},
				{
					"id": "3",
					"text": "LIBERTY BANK",
					"correctAnswer": "false"
				},
				{
					"id": "4",
					"text": "NATIONAL BANK & TRUST",
					"correctAnswer": "false"
				},
				{
					"id": "5",
					"text": "NONE OF THE ABOVE",
					"correctAnswer": "true"
				}
			]
		},
		{
			"id": "4",
			"text": "What is the total monthly payment for the above-referenced account?",
			"answers": [
				{
					"id": "1",
					"text": "$575 - $624",
					"correctAnswer": "false"
				},
				{
					"id": "2",
					"text": "$625 - $674",
					"correctAnswer": "false"
				},
				{
					"id": "3",
					"text": "$675 - $724",
					"correctAnswer": "false"
				},
				{
					"id": "4",
					"text": "$725 - $774",
					"correctAnswer": "false"
				},
				{
					"id": "5",
					"text": "NONE OF THE ABOVE",
					"correctAnswer": "true"
				}
			]
		}
	]
};


/*                EFX Only Identities
 ====================================================== */

export const GERTRUDE: KBA_JSON = {
	"authToken": "F603B306-DE98-4F5C-B8DC-5CE32475EB4D",
	"provider": "efx",
	"questions": [
		{
			"id": "1",
			"text": "Your credit file indicates you may have an auto loan/lease, opened in or around June 2012. Who is the credit provider for this account?",
			"answers": [
				{
					"id": "1",
					"text": "DASHER AND COLEMAN BUICK PONTIAC GMC, INC",
					"correctAnswer": "false"
				},
				{
					"id": "2",
					"text": "FORD MOTOR CREDIT",
					"correctAnswer": "false"
				},
				{
					"id": "3",
					"text": "INFINITI FINANCE SERVICES",
					"correctAnswer": "false"
				},
				{
					"id": "4",
					"text": "JAGUAR CREDIT",
					"correctAnswer": "false"
				},
				{
					"id": "5",
					"text": "NONE OF THE ABOVE",
					"correctAnswer": "true"
				}
			]
		},
		{
			"id": "2",
			"text": "What is the total monthly payment for the above-referenced account?",
			"answers": [
				{
					"id": "1",
					"text": "$225 - $274",
					"correctAnswer": "false"
				},
				{
					"id": "2",
					"text": "$275 - $324",
					"correctAnswer": "false"
				},
				{
					"id": "3",
					"text": "$325 - $374",
					"correctAnswer": "false"
				},
				{
					"id": "4",
					"text": "$375 - $424",
					"correctAnswer": "false"
				},
				{
					"id": "5",
					"text": "NONE OF THE ABOVE",
					"correctAnswer": "true"
				}
			]
		},
		{
			"id": "3",
			"text": "Your credit file indicates you may have an installment account (personal loans, electronic/appliance accounts, jeweler accounts, auto loans, etc.), opened in or around March 2020. Who is the credit provider for this account?",
			"answers": [
				{
					"id": "1",
					"text": "FIRST STATE BANK",
					"correctAnswer": "false"
				},
				{
					"id": "2",
					"text": "NORTHERN TRUST",
					"correctAnswer": "false"
				},
				{
					"id": "3",
					"text": "PEACHTREE BANK OF NORTH FULTON DIVISON OF THE PEACHTREE BANK",
					"correctAnswer": "false"
				},
				{
					"id": "4",
					"text": "WELLS FARGO & COMPANY",
					"correctAnswer": "true"
				},
				{
					"id": "5",
					"text": "NONE OF THE ABOVE",
					"correctAnswer": "false"
				}
			]
		}
	]
};