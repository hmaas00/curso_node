
var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
    $scope.agenda = agenda;

    $scope.auxNome = "";
    $scope.auxIdade = "";

    $scope.selection = function () {
        
        var e = document.getElementById("sel1");
        var strUser = e.options[e.selectedIndex].value;

       // this.auxNome = sel.nome;
        //this.auxIdade = sel.idade;
        console.log(strUser);
        var ind = this.getIndexByName(strUser);
        console.log(ind);

        this.auxNome = agenda[ind].nome;
        this.auxIdade = agenda[ind].idade;
    }

    $scope.getIndexByName = function (nome) {
        for (i = 0; i < agenda.length; i++) {
            if (agenda[i].nome === nome){
                return i;
            }
        }
        return -1;
    }
});


var agenda = [
    {
        nome: "Roberto",
        idade:22
    },
    {
        nome: "Vitor",
        idade: 26
    },
    {
        nome: "Elias",
        idade: 34
    },
    {
        nome: "Marina",
        idade: 24
    },
    {
        nome: "Elisa",
        idade: 52
    }

];
/*
var loadForm = function () {
     
    var str = "<div class=\"form-group\"><label for=\"sel1\">Select list:</label><select class=\"form- control\" id=\"sel1\">";
    for (i = 0; i < agenda.length; i++){
        var aux = "<option>" + agenda[i].nome + "</option>";
        //console.log(aux);
        str = str.concat(aux);
    }
    str = str.concat("</select>");
    document.getElementById("options").innerHTML = str;
    console.log(str); 
        
};*/