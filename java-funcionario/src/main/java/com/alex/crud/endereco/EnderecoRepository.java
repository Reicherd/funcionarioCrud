package com.alex.crud.endereco;

import com.alex.crud.endereco.model.Endereco;
import org.springframework.data.repository.CrudRepository;

public interface EnderecoRepository extends CrudRepository<Endereco, Long> {
}
