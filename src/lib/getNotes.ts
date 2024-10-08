function getNotes() {
    return JSON.parse(localStorage.getItem('notes') || '[]');
}

export default getNotes;