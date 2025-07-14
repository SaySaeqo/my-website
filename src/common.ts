import axios from "axios";

async function isPythonAnywhereActive() {
    // Suppress all errors from pythonanywhere call
    try {
        const pythonAnywhereStatus = await axios.get("https://saysaeqo.pythonanywhere.com/status")
        .catch(() => null); // Ignore errors
        if (pythonAnywhereStatus && pythonAnywhereStatus.data.active) {
        return true;
        }
    } catch (error) {
        // Do nothing, suppress error
    }
    return false;
}

export { isPythonAnywhereActive };