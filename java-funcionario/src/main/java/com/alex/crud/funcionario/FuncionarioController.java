package com.alex.crud.funcionario;

import com.alex.crud.funcionario.model.Funcionario;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping({"/funcionario"})
public class FuncionarioController {

    private final FuncionarioService service;

    @GetMapping
    public Iterable<Funcionario> findAll() {
        return service.findAll();
    }

    @GetMapping(path = {"/{id}"})
    public Funcionario findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @GetMapping(path = {"/find-by-nome/{nome}"})
    public List<Funcionario> findByNome(@PathVariable String nome) {
        return service.findByNome(nome);
    }

    @PostMapping
    public Funcionario create(@RequestBody Funcionario funcionario) {
        return service.save(funcionario);
    }

    @PutMapping(value="/{id}")
    public Funcionario update(@PathVariable("id") Long id,
                              @RequestBody Funcionario funcionario) {
        return service.update(id, funcionario);
    }

    @DeleteMapping(path ={"/{id}"})
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}