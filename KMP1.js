function get_next(str){
				var i = 0;
				var j = -1;
				var result = [];
				
				result[i] = -1;
				
				while(i < str.length - 1){
					if(j == -1 || str[i] == str[j]){
						++i;
						++j;
						result[i] = j;
					} else {
						j = result[j];
					}
				}
				
				return result;
			}
			
			function index_KMP(s, t, pos){
				if (pos == undefined){
					pos = 0;
				}
				
				var i = pos;
				var j = 0;
				var slen = s.length;
				var tlen = t.length;
				var next = get_next(t);
				
				while(i < slen && j < tlen){
					if(j == -1 || s[i] == t[j]){
						++i;
						++j;
					} else {
						j = next[j];
					}
				}
				
				if(j >= tlen){
					return i - tlen;
				} else {
					return -1;
				}
			}
