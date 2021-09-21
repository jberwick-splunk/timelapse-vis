var demodash = {
	"visualizations": {
		"viz_TUg2KOpr": {
			"type": "viz.line",
			"options": {},
			"dataSources": {
				"primary": "ds_FtRF4MzI"
			}
		}
	},
	"dataSources": {
		"ds_FtRF4MzI": {
			"type": "ds.search",
			"options": {
				"query": "| makeresults count=100 | eval t=86400\n| streamstats sum(t) as t\n| eval _time=_time-t | eval time=_time | fields - time"
			},
			"name": "Confirmed Cases"
		}
	},
	"defaults": {
		"dataSources": {
			"ds.search": {
				"options": {}
			}
		},
		"visualizations": {
			"global": {
				"showLastUpdated": true
			}
		}
	},
	"inputs": {},
	"layout": {
		"type": "absolute",
		"options": {
			"display": "auto-scale"
		},
		"structure": [
			{
				"item": "viz_TUg2KOpr",
				"type": "block",
				"position": {
					"x": 0,
					"y": 0,
					"w": 1200,
					"h": 510
				}
			}
		],
		"globalInputs": []
	},
	"description": "",
	"title": "Timelapse"
}

export default demodash