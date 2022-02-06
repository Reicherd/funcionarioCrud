package com.alex.crud.funcionario;

import com.alex.crud.funcionario.model.Funcionario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FuncionarioRepository extends CrudRepository<Funcionario, Long> {
    List<Funcionario> findByNomeContaining(String nome);
}
