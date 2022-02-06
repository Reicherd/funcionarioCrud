package com.alex.crud.endereco;

import com.alex.crud.endereco.model.Endereco;
import com.alex.crud.funcionario.FuncionarioRepository;
import com.alex.crud.funcionario.model.Funcionario;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RequiredArgsConstructor
@Service
public class EnderecoServiceImpl implements EnderecoService {
    private final EnderecoRepository repository;

    @Override
    public Endereco save(Endereco endereco) {
        return repository.save(endereco);
    }
}
