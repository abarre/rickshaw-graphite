define ->
	class Url
		constructor: (@url) ->

		parseParams: () ->

		getParams: () ->
			paramsObj = {}
			paramsString = @url.split('?')[1] || ""

			if paramsString != ""
				paramsArray = paramsString.split('&')
				
				for param in paramsArray
					[k, v] = param.split("=")
					k = decodeURIComponent k
					v = if v then decodeURIComponent(v) else ''
					
					if paramsObj[k]
						#transform to array is necessary
						if paramsObj[k] instanceof String || typeof(paramsObj[k]) == "string"
							paramsObj[k] = [paramsObj[k], v]
						else
							paramsObj[k].push v
					else
						paramsObj[k] = v

			return paramsObj