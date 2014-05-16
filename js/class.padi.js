function PadiRDP() {

	//  Distinct Pressure Group & Distinct RDP Depths
	var groups = Array( 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z' );
	var depths = Array( 35,40,50,60,70,80,90,100,110,120,130 );

	//	Depth vs Time Intervals
	//	table1[Depth] => (list of times) 
	var table1  = new Array();
	table1[35]  = new Array( 10,19,25,29,32,36,40,44,48,52,57,62,67,73,79,85,92,100,108,117,127,139,152,168,188,205 );
	table1[40]  = new Array( 9,16,22,25,27,31,34,37,40,44,48,51,55,60,64,69,74,79,85,91,97,104,111,120,129,140 );
	table1[50]  = new Array( 7,13,17,19,21,24,26,28,31,33,36,39,41,44,47,50,53,57,60,63,67,71,75,80 );
	table1[60]  = new Array( 6,11,14,16,17,19,21,23,25,27,29,31,33,35,37,39,42,44,47,49,52,54,55 );
	table1[70]  = new Array( 5,9,12,13,15,16,18,19,21,22,24,26,27,29,31,33,35,36,38,40 );
	table1[80]  = new Array( 4,8,10,11,13,14,15,17,18,19,21,22,23,25,26,28,29,30 );
	table1[90]  = new Array( 4,7,9,10,11,12,13,15,16,17,18,19,21,22,23,24,25 );
	table1[100] = new Array( 3,6,8,9,10,11,12,13,14,15,16,17,18,19,20 );
	table1[110] = new Array( 3,6,7,8,9,10,11,12,13,13,14,15,16 );
	table1[120] = new Array( 3,5,6,7,8,9,10,11,11,12,13 );
	table1[130] = new Array( 3,5,6,7,7.5,8,9,10 );
	table1[140] = new Array( 1,4,5,6,7,8 );

	//	Depth vs Limits
	//	table2[Depth] => (Safty stop, Max time) 
	var table2  = new Array();
	table2[35]  = new Array( 152,205 );
	table2[40]  = new Array( 111,140 );
	table2[50]  = new Array( 67,80 );
	table2[60]  = new Array( 49,55 );
	table2[70]  = new Array( 35,40 );
	table2[80]  = new Array( 26,30 );
	table2[90]  = new Array( 22,25 );
	table2[100] = new Array( 3,20 );
	table2[110] = new Array( 3,16 );
	table2[120] = new Array( 3,13 );
	table2[130] = new Array( 3,10 );
	table2[140] = new Array( 1,8 );

	//  Group vs Surface intervals
	var table3  = new Object();
	table3['A'] = new Array( 180 );
	table3['B'] = new Array( 228,47 );
	table3['C'] = new Array( 250,69,21 );
	table3['D'] = new Array( 258,78,30,8 );
	table3['E'] = new Array( 268,87,38,16,7 );
	table3['F'] = new Array( 275,94,46,24,15,7 );
	table3['G'] = new Array( 282,101,53,31,22,13,6 );
	table3['H'] = new Array( 288,107,59,37,28,20,12,5 );
	table3['I'] = new Array( 294,113,65,43,34,26,18,11,5 );
	table3['J'] = new Array( 300,119,71,49,40,31,24,17,11,5 );
	table3['K'] = new Array( 305,124,76,54,45,37,29,22,16,10,4 );
	table3['L'] = new Array( 310,129,81,59,50,42,34,27,21,15,9,4 );
	table3['M'] = new Array( 315,134,85,64,55,46,39,32,25,19,14,9,4 );
	table3['N'] = new Array( 319,138,90,68,59,51,43,36,30,24,18,13,8,3 );
	table3['O'] = new Array( 324,143,94,72,63,55,47,41,34,28,23,17,12,8,3 );
	table3['P'] = new Array( 328,147,98,76,67,59,51,45,38,32,27,21,16,12,7,3 );
	table3['Q'] = new Array( 331,150,102,80,71,63,55,48,42,36,30,25,20,16,11,7,3 );
	table3['R'] = new Array( 335,154,106,84,75,67,59,52,46,40,34,29,24,19,15,11,7,3 );
	table3['S'] = new Array( 339,159,109,87,78,70,63,56,49,43,38,32,27,23,18,14,10,6,3 );
	table3['T'] = new Array( 342,161,113,91,82,73,66,59,53,47,41,36,31,26,22,17,13,10,6,2 );
	table3['U'] = new Array( 345,164,116,94,85,77,69,62,56,50,44,39,34,29,25,21,17,13,9,6,2 );
	table3['V'] = new Array( 348,167,119,97,88,80,72,65,59,53,47,42,37,33,28,24,20,16,12,9,5,2 );
	table3['W'] = new Array( 351,170,122,100,91,83,75,68,62,56,50,45,40,36,31,27,23,19,15,12,8,5,2 );
	table3['X'] = new Array( 354,173,125,103,94,86,78,71,65,59,53,48,43,39,34,30,26,22,18,15,11,8,5,2 );
	table3['Y'] = new Array( 357,176,128,106,97,89,81,74,68,62,56,51,46,41,37,33,29,25,21,18,14,11,8,5,2 );
	table3['Z'] = new Array( 360,179,131,109,100,91,84,77,71,65,59,54,49,44,40,35,31,28,24,20,17,14,11,8,5,2 );

	//  Repetitive Dive time table
	//  table4[Group] => RNT at depth
	var table4  = new Object();
	table4['A']  = new Array( 10,9,7,6,5,4,4,3,3,3,3 );
	table4['B']  = new Array( 19,16,13,11,9,8,7,6,6,5,5 );
	table4['C']  = new Array( 25,22,17,14,12,10,9,8,7,6,6 );
	table4['D']  = new Array( 29,25,19,16,13,11,10,9,8,7,7 );
	table4['E']  = new Array( 32,27,21,17,15,13,11,10,9,8,8 );
	table4['F']  = new Array( 36,31,24,19,16,14,12,11,10,9,8 );
	table4['G']  = new Array( 40,34,26,21,18,15,13,12,11,10,9 );
	table4['H']  = new Array( 44,37,28,23,19,17,15,13,12,11,10 );
	table4['I']  = new Array( 48,40,31,25,21,18,16,14,13,12 );
	table4['J']  = new Array( 52,44,33,27,22,19,17,15,14,12 );
	table4['K']  = new Array( 57,48,36,29,24,21,18,16,14,13 );
	table4['L']  = new Array( 62,51,38,31,26,22,19,17,15 );
	table4['M']  = new Array( 67,55,41,33,27,23,21,18,16 );
	table4['N']  = new Array( 73,60,44,35,29,25,22,19 );
	table4['O']  = new Array( 79,64,47,37,31,26,23,20 );
	table4['P']  = new Array( 85,69,50,39,33,28,24 );
	table4['Q']  = new Array( 92,74,53,42,34,29,25 );
	table4['R']  = new Array( 100,79,57,44,36,30 );
	table4['S']  = new Array( 108,85,60,47,38 );
	table4['T']  = new Array( 117,91,63,49,40 );
	table4['U']  = new Array( 127,97,67,52 );
	table4['V']  = new Array( 139,104,71,54 );
	table4['W']  = new Array( 152,111,75,55 );
	table4['X']  = new Array( 168,120,80 );
	table4['Y']  = new Array( 188,129 );
	table4['Z']  = new Array( 205,140 );

	var init_group = 'A';			//  Default Pressure Group
	var init_depth = 35;			//  Minimum Depth
	var init_btime = 10;			//  Minimum Bottom Time
	
	var surface_time = 0;			//  Minimum Surface Interval
	var surface_group = init_group;		//  Pressures group after surface interval
	
	var rnt = 0;					//  Return Nitrogen Time
	var decomp = 205;				//	Max time to decompression
	var safety = 152;				//	Safty Stop time
	
	var adj_group = init_group;		//  Adjusted Pressure Group
	var adj_depth = init_depth;		//  Adjusted Depth
	var adj_btime = init_btime;		//  Adjusted Depth
	
	var stop_req = false;			//  Is a safety Stop Required?

	this.getGroup = function() { return adj_group; }
	this.setGroup = function(x) {
		var grp = x.toUpperCase();
		var re = new RegExp(/^[A-Z]$/);
		if( re.test(grp) == false ) {
			throw new Error('Invalid pressure group specified');
			return false;
		} else {
			init_group = grp;
			adj_group = grp;
			return true;
		}
	}
	
	this.getDepth = function() { return adj_depth; }
	this.setDepth = function(x) {
		var depth = parseInt(x);
		var re = new RegExp(/^[0-9]{1,3}$/);
		if( re.test(depth) == false ) { 
			throw new Error('Invalid depth specified'); 
			return false;
		} else {
			if( depth > 140 ) { 
				throw new Error('Depth exceeds PADI recreational dive limits'); 
				return false;
			} else {
				if( depth < 0 ) { depth = 0; }
				init_depth = depth;
				//  Calculate depth via lookup table based on user specified depth.
				for( var table_depth in table1 ) {
					if( init_depth <= parseInt(table_depth) ) {
						adj_depth = parseInt(table_depth);
						decomp = table2[adj_depth][1];
						safety = table2[adj_depth][0];
						break;
					}
				}
				return true;
			}
		}
	}
	
	this.getBottomTime = function() { return adj_btime; }
	this.setBottomTime = function(x) {
		var time = parseInt(x);
		var re = new RegExp(/^[0-9]{1,3}$/);
		if( re.test(time) == false ) { 
			throw new Error('Invalid time specified'); 
			false;
		} else {
			if( time > 205 ) { 
				throw new Error('Time exceeds PADI recreational dive limits'); 
				return false;
			} else {
				if( time < 0 ) { depth = 0; }
				init_btime = time;
				return true;
			}
		}
	}
	
	this.getSurfaceInterval = function() { return surface_time; }
	this.setSurfaceInterval = function(x) { 
		var surface = parseInt(x);
		var re = new RegExp(/^[0-9]*$/);
		if( re.test(surface) == false ){ 
			throw new Error('Invalid surface interval specified'); 
			return false;
		} else {
			if( surface < 0 ) { surface = 0; }
			surface_time = surface;
			return true;
		}
	}

	this.getRnt = function() { return rnt; }
	this.safety = function() { return stop_req; }
	this.getSurfaceGroup = function() { return surface_group; }
	
	this.calc = function() {
		
		//	Calculate residual nitrogen time
		for(var d_index in depths) { if( adj_depth == depths[d_index] ) { break; } } //  Get the index of the adjusted depth
		if(	typeof(table4[init_group][d_index])!='undefined' && table4[init_group][d_index]!==null ) {
			rnt = table4[init_group][d_index]; 
		}
	
		//  Calculate adj_btime
		adj_btime = init_btime + rnt;
	
		//  Check for no decompression limits
		if(adj_btime > decomp) { throw new Error('Bottom time exeeds no decompression limits'); }

		//  Check to see if safety stop is required
		stop_req = false;
		if(adj_btime > safety) { stop_req = true; }
		
		//  Find adj_group based on adj_depth & adj_btime
		var times = table1[adj_depth];
		for( var time_index in times ) {
			if(adj_btime <= times[time_index]) {
				adj_group = groups[time_index];
				surface_group = groups[time_index];
				break;
			}
		}
		
		//  Find group after surface interval
		times = table3[adj_group];
		if(surface_time > times[0]){ adj_group = 'A'; }
		for( time_index in times ){
			var next_index = parseInt(time_index) + 1;
			var this_time = times[time_index];
			var next_time = times[next_index];
			//alert( surface_time + " " + this_time + " " + next_time );
			if(surface_time <= this_time && surface_time > next_time) { 
				surface_group = groups[time_index];
				break;
			}
		}

	}
	
}