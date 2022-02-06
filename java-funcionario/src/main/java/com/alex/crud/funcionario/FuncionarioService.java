package com.alex.crud.funcionario;

import com.alex.crud.funcionario.model.Funcionario;

import java.util.List;

public interface FuncionarioService {

    Iterable<Funcionario> findAll();

    Funcionario findById(Long id);

    List<Funcionario> findByNome(String nome);

    Funcionario save(Funcionario funcionario);

    Funcionario update(Long id, Funcionario funcionario);

    void delete(Long id);
}
