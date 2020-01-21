import { PipeTransform, Pipe } from '@angular/core';
import { Student } from 'src/app/models/student.models';

@Pipe({ name:'alunoPesquisa' })
export class AlunoPesquisaPipe implements PipeTransform {
    transform(alunos: Array<Student>, searchInput: string): Array<Student>{
        if(!alunos || !searchInput){
            return alunos;
        }
        
        return alunos.filter(Student => Student.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1);
    }
}