const URL = "http://localhost:8080/members";

const username = 'user';
const password = 'password';
const basicAuth = 'Basic ' + btoa(username + ':' + password);
export class NameApi {

    getMembers() {
        return fetch(URL, {
            headers: {
                'Authorization': basicAuth
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No autorizado');
            }
            return response.json();
        });
    }

    addMember(member) {
        const headers = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': basicAuth
             },
            body: JSON.stringify(member)
        };
        return fetch(URL, headers)
        .then(response => {
            if (!response.ok) {
                throw new Error('No autorizado');
            }
            return response.json();
        });

    }

    deleteMember(id) {
        const headers = {
            method: 'delete',
            headers: {
                'Authorization': basicAuth
            }
        }
        return fetch(URL + "/" + id, headers)
        .then(response => {
            if (!response.ok) {
                throw new Error('No autorizado');
            }
            return response.json();
        });
    }

    editMember(id, member) {
        const headers = {
            method: 'put',
            headers: { 
                "Content-Type": "application/json",
                'Authorization': basicAuth
            },
            body: JSON.stringify(member)
        }
        return fetch(URL + "/" + id, headers)
        .then(response => {
            if (!response.ok) {
                throw new Error('No autorizado');
            }
            return response.json();
        });
    }
}