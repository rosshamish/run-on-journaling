app.factory('listService', function() {

	var factory = {};
	factory.dataSet = [];

	var localStorageFilename = 'editor.content';


	function retrieve() {
		factory.dataSet = JSON.parse(localStorage[localStorageFilename] || '[]');
	}

	function save() {
		localStorage.setItem(localStorageFilename, JSON.stringify(factory.dataSet));
	}

	function ListData(name, data) {
		this.name = name;
		this.data = [data];
	}

	// Only invoked if its the 0th branch
	factory.addList = function(scopeList) {
		retrieve();

		var addNewList = true;
		factory.dataSet.forEach(function(list) {
			if (list == null) {
				return;
			}
			if (scopeList.substring(0,5) === list.name) {
				list.data[0] = scopeList;
				addNewList = false;
			}
		})

		if (addNewList && (scopeList.length > 5)) {
			// Add as a new list
			var newList = new ListData(scopeList.substring(0,5), scopeList);
			factory.dataSet.push(newList);
		}

		save();
	}

	// Invoked by all branches except 0th branch
	factory.updateData = function(listLabel, data, index) {
		retrieve();

		factory.dataSet.forEach(function(list) {
			if (list.name === listLabel) {
				list.data[index] = data;
			}
		})

		save();
	}

	// Invoked for retrieving the editor contents
	factory.getDataAtIndex = function(listLabel, index) {
		console.log(listLabel);
		console.log(index);
		var found = null;
		factory.dataSet.forEach(function(list) {
			if (list.name = listLabel) {
				found = list.data[index];
			}
		})
		return found;
	}

	factory.getListList = function() {
		retrieve();

		var lists = [];
		factory.dataSet.forEach(function(list) {
			lists.push(list.name);
		})
		return lists;
	}


	return factory;
});

