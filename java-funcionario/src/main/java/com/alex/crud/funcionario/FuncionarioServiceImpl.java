package com.alex.crud.funcionario;

import com.alex.crud.endereco.EnderecoService;
import com.alex.crud.endereco.model.Endereco;
import com.alex.crud.funcionario.model.Funcionario;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RequiredArgsConstructor
@Service
public class FuncionarioServiceImpl implements FuncionarioService{
    private final FuncionarioRepository repository;
    private final EnderecoService enderecoService;

    @Override
    public Iterable<Funcionario> findAll() {
        return repository.findAll();
    }

    @Override
    public Funcionario findById(Long id) {
        return repository.findById(id)
                .orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public List<Funcionario> findByNome(String nome) {
        return repository.findByNomeContaining(nome);
    }

    @Override
    public Funcionario save(Funcionario funcionario) {
        enderecoService.save(funcionario.getEndereco());
        return repository.save(funcionario);
    }

    @Override
    public Funcionario update(Long id, Funcionario funcionario) {
        return repository.findById(id).map(fun -> {
            fun.setEmail(funcionario.getEmail());
            fun.setGenero(funcionario.getGenero());
            fun.setDataNascimento(funcionario.getDataNascimento());
            fun.setMatricula(funcionario.getMatricula());
            fun.setNome(funcionario.getNome());
            fun.setTelefone(funcionario.getTelefone());

            Endereco end = fun.getEndereco();
            end.setBairro(funcionario.getEndereco().getBairro());
            end.setCep(funcionario.getEndereco().getCep());
            end.setCidade(funcionario.getEndereco().getCidade());
            end.setComplemento(funcionario.getEndereco().getComplemento());
            end.setNumero(funcionario.getEndereco().getNumero());

            return repository.save(fun);
        }).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public void delete(Long id) {
        Funcionario funcionario = repository.findById(id).orElseThrow(EntityNotFoundException::new);

        repository.delete(funcionario);
    }
}
