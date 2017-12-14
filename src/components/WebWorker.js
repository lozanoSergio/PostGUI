// worker.js
const workercode = () => {

    self.onmessage = function (e) {
        // TODO: implement an IF statement to allow the main thread to specify which function they wanna execute by means of providing a string value to e.data.method = "delimitedColumnCSV" for current algorithm...

        // COLUMN should be the index of the target column in this.state.columns
        let column = e.data.column;
        let data = e.data.data;
        let columns = e.data.columns;

        let output = "";
        for (let i = 0; i < data.length; i++) {
            output += data[i][columns[column]] + ",";
        }

        self.postMessage(output.replace(/,$/g, ""));        
    }
};

let code = workercode.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

const blob = new Blob([code], { type: "application/javascript" });
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;