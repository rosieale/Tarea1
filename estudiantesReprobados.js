// Tarea 1 - Rosie M - 21811078

var Estudiante1 ={
    nombre:'Carlos Perez',
    cuenta: 2181,
    nota: 55
}

var Estudiante2 ={
    nombre:'Monica Santos',
    cuenta: 8040,
    nota: 95
}

var Estudiante3 ={
    nombre:'Angel Rodas',
    cuenta: 6120,
    nota: 80
}

var Estudiante4 ={
    nombre:'Rosa Flores',
    cuenta: 4654,
    nota: 52
}

const Estudiantes=[Estudiante1, Estudiante2, Estudiante3, Estudiante4]

const Reprobados = Estudiantes.find(Estudiantes=>Estudiantes.nota<=60)

console.log( ` Los Estudiantes Reprobados Son: ` , Reprobados )
